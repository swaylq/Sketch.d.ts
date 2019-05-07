/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentErrorRecoveryAttempter<T0 = void, T1 = void, T2 = void> extends NSObject {
    cancelRecovery<R = void>(): R;
    attemptSilentRecoveryFromError_error<R = boolean, P0 = unknown, P1 = unknown>(_attemptSilentRecoveryFromError: P0, _error: P1): R;
    attemptSilentRecoveryFromError_thenContinue<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_attemptSilentRecoveryFromError: P0, _thenContinue: P1): R;
    attemptRecoveryFromError_optionIndex<R = boolean, P0 = unknown, P1 = number>(_attemptRecoveryFromError: P0, _optionIndex: P1): R;
    attemptRecoveryFromError_optionIndex_delegate_didRecoverSelector_contextInfo<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = string, P4 = void>(_attemptRecoveryFromError: P0, _optionIndex: P1, _delegate: P2, _didRecoverSelector: P3, _contextInfo: P4): R;
    dealloc<R = void>(): R;
    initWithDocument_silentRecoveryOptionIndex_docModalRecoveryAttempter_appModalRecoveryAttempter_recoveryCanceler<R = unknown, P0 = unknown, P1 = number, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType, P4 = CDUnknownBlockType>(_initWithDocument: P0, _silentRecoveryOptionIndex: P1, _docModalRecoveryAttempter: P2, _appModalRecoveryAttempter: P3, _recoveryCanceler: P4): R;
    initWithDocument_wrappedRecoveryAttempter_customOptionIndexes_docModalRecoveryAttempter_appModalRecoveryAttempter_recoveryCanceler<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType, P4 = CDUnknownBlockType, P5 = CDUnknownBlockType>(_initWithDocument: P0, _wrappedRecoveryAttempter: P1, _customOptionIndexes: P2, _docModalRecoveryAttempter: P3, _appModalRecoveryAttempter: P4, _recoveryCanceler: P5): R;
    initWithDocument_wrappedRecoveryAttempter_continuer<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_initWithDocument: P0, _wrappedRecoveryAttempter: P1, _continuer: P2): R;
  }
  namespace NSDocumentErrorRecoveryAttempter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSDocumentErrorRecoveryAttempter>(): R;
      new: <R = NSDocumentErrorRecoveryAttempter>() => R;
    }
  }
}

declare const NSDocumentErrorRecoveryAttempter: cocoa.NSDocumentErrorRecoveryAttempter.CLASS;
