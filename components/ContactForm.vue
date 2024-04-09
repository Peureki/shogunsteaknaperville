<template>
    <form ref="form" @submit.prevent="sendEmail">
        <div class="grid-form">
            <span id="fName-container">
                <label for="fName">First Name*</label>
                <input type="text" id="fName" name="fName">
            </span>
            
            <span id="lName-container">
                <label for="lName">Last Name</label>
                <input type="text" id="lName" name="lName">
            </span>
            
            <span id="email-container">
                <label for="email">Email*</label>
                <input type="email" id="email" name="email">
            </span>
            
            <span id="phone-container">
                <label for="phone">Phone*</label>
                <input type="tel" id="phone" name="phone">
            </span>
            
            <span id="subject-container">
                <label for="subject">Subject*</label>
                <input type="text" id="subject" name="subject">
            </span>
            
            <span id="message-container">
                <label for="message">Message*</label>
                <textarea id="message" name="message"></textarea>
            </span>

            <span class="submit-container">
                <button class="cta" id="submit">
                    <input type="submit" value="Submit">
                </button> 

                <a @click="checkEmptyFields">Test Button</a>

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
    formResponse = ref(null);

const fName = ref(null),
    fNameInput = ref(null);

// Update formStatus from true <=> false when form is submitted
// 
const updateFormStatus = () => {
    formStatus.value = true; 
    setTimeout(() => {
        formStatus.value = false; 
    }, 1000);
}

const checkEmptyFields = () => {
    const isEmpty = true;
    const borderError = `var(--border-error)`;

    if (!fName.value){
        fNameInput.value.style.border = `var(--border-error)`;
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

    emailjs.sendForm('service_9uaa68k', 'template_eq1t5zc', form.value, {
        publicKey: 'wwsu2_RjRcre7t4NC',
        'g-recaptcha-response': token
    })
        .then(() => {
            updateFormStatus();
            formResponse.value = 'Success! Form submitted.'
            console.log('Success');
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