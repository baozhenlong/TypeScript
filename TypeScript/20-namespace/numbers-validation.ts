/// <reference path = "validation.ts" />
namespace Validation {
    const numbersRegExp = /^[1-9]+$/;
    export class NumbersValidation implements StringValidator {
        isAccepttable(s: string): boolean {
            return numbersRegExp.test(s);
        }
    }
}