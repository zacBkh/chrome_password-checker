var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const copyBtn = document.querySelector('#copyBtn');
const copyContent = () => __awaiter(this, void 0, void 0, function* () {
    console.log('CLICKED');
    try {
        yield navigator.clipboard.writeText(passwordInput.value);
    }
    catch (err) {
        console.error('Failed to copy: ', err);
    }
});
copyBtn.addEventListener('click', copyContent);
