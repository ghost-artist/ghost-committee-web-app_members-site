// Browser-local switch shared by the application and committee review pages.
// It is deliberately ignored on deployed hosts.
export function suppressApplicationEmails() {
    const isLocal = ['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname);
    return isLocal && window.localStorage.getItem('ghost.suppressApplicationEmails') === 'true';
}

// A browser/origin-specific recipient override for manual application tests.
// A malformed value stops sending rather than falling back to real recipients.
export function getApplicationEmailRecipientOverride() {
    const recipient = window.localStorage.getItem('ghost.applicationEmailRecipient');
    if (recipient === null) return '';
    const email = recipient.trim();
    if (!/^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/.test(email)) {
        throw new Error('Set ghost.applicationEmailRecipient to one valid email address, or remove it.');
    }
    return email;
}
