import test from 'node:test';
import assert from 'node:assert/strict';
import { submitEnquiry, ENQUIRY_ERROR } from '../src/lib/enquiry.js';

test('missing configuration reports a usable fallback without sending', async () => {
  let called = false;
  await assert.rejects(submitEnquiry({}, '', async () => { called = true; }), /email sales@alpacgroup.com/);
  assert.equal(called, false);
});
test('successful submission sends the expected fields and returns success', async () => {
  let request;
  const success = await submitEnquiry({ name: 'Test buyer', message: 'Prototype' }, 'test-key', async (url, options) => {
    request = { url, options };
    return { ok: true, json: async () => ({ success: true }) };
  });
  assert.equal(success, true);
  assert.equal(request.url, 'https://api.web3forms.com/submit');
  assert.equal(request.options.method, 'POST');
  assert.equal(request.options.body.get('message'), 'Prototype');
  assert.equal(request.options.body.get('access_key'), 'test-key');
});
for (const [name, fetcher] of [
  ['service rejection', async () => ({ ok: true, json: async () => ({ success: false }) })],
  ['HTTP failure', async () => ({ ok: false, json: async () => ({ success: true }) })],
  ['invalid JSON', async () => ({ ok: true, json: async () => { throw new Error('Bad JSON'); } })],
  ['network failure', async () => { throw new Error('Offline'); }],
]) {
  test(`${name} returns a recoverable error`, async () => {
    await assert.rejects(submitEnquiry({}, 'test-key', fetcher), { message: ENQUIRY_ERROR });
  });
}
