<template>
    <form>
        <div class="grid-form">
            <span id="fName-container">
                <label for="fName">First name</label>
                <input type="text" id="fName" name="fName">
            </span>
            
            <span id="lName-container">
                <label for="lName">Last name</label>
                <input type="text" id="lName" name="lName">
            </span>
            
            <span id="email-container">
                <label for="email">Email</label>
                <input type="email" id="email" name="email">
            </span>
            
            <span id="phone-container">
                <label for="phone">Phone</label>
                <input type="tel" id="phone" name="phone">
            </span>
            
            <span id="subject-container">
                <label for="subject">Subject</label>
                <input type="text" id="subject" name="subject">
            </span>
            
            <span id="message-container">
                <label for="message">Message</label>
                <textarea id="message" name="message"></textarea>
            </span>

            <button class="cta" id="submit">
                <input type="submit" value="Submit">
            </button> 
        </div>
    </form>
</template>

<style scoped>
.grid-form{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas: 
        'fName fName fName lName lName lName'
        'email email email phone phone phone'
        'subject subject subject subject subject subject'
        'message message message message message message'
        'submit submit submit . . .'
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
#submit{
    grid-area: submit;
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