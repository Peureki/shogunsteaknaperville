// Dynamically format numbers to make it harder for spammers to easily grab the phone number
export const formatPhoneNumber = (phoneNumber) => {
    // Remove any non-diget characters 
    let cleaned = ('' + phoneNumber).replace(/\D/g, '');
    // Check if the phone number has 10 digits
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    
    if (match) {
        // Format the phone number as ###-###-####
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    // Return the original phone number if it doesn't match the format
    return phoneNumber;
}