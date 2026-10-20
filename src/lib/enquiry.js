export const ENQUIRY_ERROR = 'Your enquiry could not be sent. Please try again, or email sales@alpacgroup.com.';

export async function submitEnquiry(fields, accessKey, fetcher = fetch) {
  if (!accessKey?.trim()) {
    throw new Error('Online enquiries are temporarily unavailable. Please email sales@alpacgroup.com or call +44 (0) 1283 567737.');
  }
  const body = new FormData();
  for (const [name, value] of Object.entries(fields)) body.append(name, value);
  body.append('access_key', accessKey);
  body.append('from_name', 'Alpac Alloys website');
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetcher('https://api.web3forms.com/submit', {
      method: 'POST', body, signal: controller.signal,
    });
    const data = await response.json();
    if (!response.ok || data.success !== true) throw new Error(ENQUIRY_ERROR);
    return true;
  } catch {
    throw new Error(ENQUIRY_ERROR);
  } finally {
    clearTimeout(timeout);
  }
}
