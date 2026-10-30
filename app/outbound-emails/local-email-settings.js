// Browser-local switch shared by the application and committee review pages.
// It is deliberately ignored on deployed hosts.
export function suppressApplicationEmails() {
    const isLocal = ['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname);
    return isLocal && window.localStorage.getItem('ghost.suppressApplicationEmails') === 'true';
}
