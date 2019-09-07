/// <reference path = "validation.ts" />
namespace Validation {
    const lettersRegExp = /^[A-Za-z]+$/;
    export class LettersValidation implements StringValidator {
        isAccepttable(s: string): boolean {
            return lettersRegExp.test(s);
        }
    }
}