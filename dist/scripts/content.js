var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// onFocus
const handleFocusInput = (event) => __awaiter(this, void 0, void 0, function* () {
    const element = event.target;
    if (element.tagName !== 'INPUT') {
        return;
    }
    const target = event.target;
    const pwdCheckrIcon = document.querySelector('#password-checker-icon');
    if (pwdCheckrIcon) {
        return;
    }
    if (target.type === 'password') {
        console.log('User focused on a password input field.');
        const imgObject = yield chrome.runtime.sendMessage({
            action: 'getImageURL',
        });
        const iconInput = document.createElement('div');
        iconInput.setAttribute('id', 'password-checker-icon');
        iconInput.style.cssText = `
    margin-top: 15px;
    height: 20px;
    width: 20px;
    top: 50%;
    right: 3px;
    transform: translateY(-50%);
    background: url(${imgObject.imageURL}) no-repeat;
    cursor: pointer;`;
        element.insertAdjacentElement('afterend', iconInput);
        iconInput.addEventListener('click', function () {
            console.log('Icon clicked!');
            // Create iframe and insert
            const dialogElement = document.createElement('iframe');
            dialogElement.setAttribute('id', 'testestest');
            dialogElement.src = chrome.runtime.getURL('dialog.html');
            document
                .querySelector('#password-checker-icon')
                .insertAdjacentElement('afterend', dialogElement);
            document.body.appendChild(dialogElement);
        });
    }
});
// onBlur
const handleBlurInput = (event) => {
    const element = event.target;
    const icon = document.querySelector('#password-checker-icon');
    if (element.tagName !== 'INPUT') {
        return;
    }
    if (icon) {
        icon.remove();
    }
    console.log('event', event);
    console.log('event', element.tagName);
};
document.addEventListener('focusin', handleFocusInput);
// document.addEventListener('focusout', handleBlurInput)
