/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBinderAlertRecoveryAttempter<T = any> extends cocoa.NSObject {
    recoveryOptionIndex<R = number>(): R;
    attemptRecoveryFromError_optionIndex<R = boolean, P0 = unknown, P1 = number>(_attemptRecoveryFromError: P0, _optionIndex: P1): R;
    attemptRecoveryFromError_optionIndex_delegate_didRecoverSelector_contextInfo<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = string, P4 = void>(_attemptRecoveryFromError: P0, _optionIndex: P1, _delegate: P2, _didRecoverSelector: P3, _contextInfo: P4): R;
  }
  namespace classes {
    export interface _NSBinderAlertRecoveryAttempter<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSBinderAlertRecoveryAttempter>(): R;
      new: <R = _NSBinderAlertRecoveryAttempter>() => R;
    }
  }
}
