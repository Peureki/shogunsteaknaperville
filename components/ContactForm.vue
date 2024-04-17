<template>
    <form ref="form" @submit.prevent="checkEmptyFields">
        <div class="grid-form">
            <span id="fName-container">
                <ClientOnly>
                    <label for="fName">First Name*</label>
                    <input type="text" id="fName" name="fName" v-model="formData.fName" ref="fName">
                </ClientOnly>
            </span>
            
            <span id="lName-container">
                <label for="lName">Last Name</label>
                <input type="text" id="lName" name="lName">
            </span>
            
            <span id="email-container">
                <ClientOnly>
                    <label for="email">Email*</label>
                    <input type="email" id="email" name="email" v-model="formData.email" ref="email">
                </ClientOnly>
            </span>
            
            <span id="phone-container">
                <ClientOnly>
                    <label for="phone">Phone*</label>
                    <input type="tel" id="phone" name="phone" v-model="formData.phone" ref="phone">
                </ClientOnly>
            </span>
            
            <span id="subject-container">
                <ClientOnly>
                    <label for="subject">Subject*</label>
                    <input type="text" id="subject" name="subject" v-model="formData.subject" ref="subject">
                </ClientOnly>
            </span>
            
            <span id="message-container">
                <ClientOnly>
                    <label for="message">Message*</label>
                    <textarea id="message" name="message" v-model="formData.message" ref="message"></textarea>
                </ClientOnly>
            </span>

            <span class="submit-container">
                <button class="cta" id="submit">
                    <input type="submit" value="Submit">
                </button> 

                <Transition name="fade">
                    <p v-if="formStatus">{{ formResponse }}</p>
                </Transition>
            </span>
        </div>
    </form>
</template>

<script setup>
import emailjs from '@emailjs/browser'

const form = ref(null),
    formStatus = ref(false),
    formResponse = ref(null),
    formIsEmpty = ref(true);

const formData = ref({
    fName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
})

const fName = ref(null),
    email = ref(null),
    phone = ref(null),
    subject = ref(null),
    message = ref(null);

// Update formStatus from true <=> false when form is submitted
// 
const updateFormStatus = () => {
    formStatus.value = true; 
    setTimeout(() => {
        formStatus.value = false; 
    }, 3000);
}
// Check if any form data from formData is empty
// If empty, means client has not filled a required field
const checkAnyEmptyFormData = () => {
    for (const key in formData.value){
        if (!formData.value[key]){
            return true;
        }
    } 
    return false; 
}

const checkEmptyFields = () => {
    const borderError = `var(--border-error)`;
    // Check if the formData value is empty
    // If empty => change to red border for the <input> 
    // If !empty => return or remain regular border
    fName.value.style.border = !formData.value.fName ? borderError : 'none';
    email.value.style.border = !formData.value.email ? borderError : 'none';
    phone.value.style.border = !formData.value.phone ? borderError : 'none';
    subject.value.style.border = !formData.value.subject ? borderError : 'none';
    message.value.style.border = !formData.value.message ? borderError : 'none';

    // Check if form is empty 
    formIsEmpty.value = checkAnyEmptyFormData(); 
    // If form is empty => show message to alert user that theyre missing fields
    // else => send the email
    if (formIsEmpty.value){
        updateFormStatus(); 
        formResponse.value = 'Missing fields *';
    } else {
        sendEmail(); 
    }
}

// When users submit a form 
// Validate unique token for recaptcha first
// Then => send form through emailJS 
const sendEmail = async () => {
    const recaptchaInstance = await import('vue-recaptcha-v3')
        .then(module => module.useReCaptcha());
    
    await recaptchaInstance?.recaptchaLoaded();

    const token = await recaptchaInstance?.executeRecaptcha('validate_captcha');

    emailjs.sendForm('service_9hh11zj', 'template_lnxsn6a', form.value, {
        publicKey: '_QxZZf81pHW_5-jqB',
        'g-recaptcha-response': token
    })
        .then(() => {
            updateFormStatus();
            formResponse.value = 'Success! Form submitted.'
            console.log('Successful form submission');
        },
        (error) => {
            updateFormStatus(); 
            formResponse.value = 'Error! Form not submitted.'
            console.log('Failed...', error.text);
        },
    );
}


</script>

<style scoped>
.grid-form{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas: 
        'fName fName fName lName lName lName'
        'email email email phone phone phone'
        'subject subject subject subject subject subject'
        'message message message message message message'
        'submit submit submit submit submit submit'
    ;
    grid-column-gap: var(--gap-grid-column);
    grid-row-gap: var(--gap-grid-form-row);
}
#fName-container{
    grid-area: fName;
}
#lName-container{
    grid-area: lName;
}
#email-container{
    grid-area: email;
}
#phone-container{
    grid-area: phone;
}
#subject-container{
    grid-area: subject;
}
#message-container{
    grid-area: message;
}



label, input, textarea{
    font-size: var(--font-size-p);
    font-family: var(--font-family-karla);
}
input[type="submit"]{
    font-size: var(--font-size-cta);
}
span {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
span.submit-container{
    grid-area: submit;
    flex-direction: row;
    align-items: center;
    gap: 20px;
}
label{
    color: var(--clr-text);
}
input, textarea{
    padding: 15px;
    border-radius: 50px;
    border: none;
}
textarea{
    height: var(--h-textarea);
    border-radius: 30px;
}

</style>