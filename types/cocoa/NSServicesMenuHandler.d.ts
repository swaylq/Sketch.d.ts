/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSServicesMenuHandler<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSServicesMenuHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSServicesMenuHandler>(): R;
      new: <R = NSServicesMenuHandler>() => R;
      registerServicesMenuSendTypes_returnTypes<R = void, P0 = unknown, P1 = unknown>(_registerServicesMenuSendTypes: P0, _returnTypes: P1): R;
      _configureServicesMenu<R = void, P0 = unknown>(__configureServicesMenu: P0): R;
      _computeErrorForErrorCode_serviceName_appIdentifier_launchError_appURL_isWorkflow_additionalWorkflowErrorString<R = unknown, P0 = number, P1 = unknown, P2 = unknown, P3 = number, P4 = unknown, P5 = boolean, P6 = unknown>(__computeErrorForErrorCode: P0, _serviceName: P1, _appIdentifier: P2, _launchError: P3, _appURL: P4, _isWorkflow: P5, _additionalWorkflowErrorString: P6): R;
      attemptRecoveryFromError_optionIndex_delegate_didRecoverSelector_contextInfo<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = string, P4 = void>(_attemptRecoveryFromError: P0, _optionIndex: P1, _delegate: P2, _didRecoverSelector: P3, _contextInfo: P4): R;
      attemptRecoveryFromError_optionIndex<R = boolean, P0 = unknown, P1 = number>(_attemptRecoveryFromError: P0, _optionIndex: P1): R;
      _performServiceFromDictionary_withPasteboard<R = boolean, P0 = unknown, P1 = unknown>(__performServiceFromDictionary: P0, _withPasteboard: P1): R;
      _performServiceFromEntry_withPasteboard_withRequestor<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(__performServiceFromEntry: P0, _withPasteboard: P1, _withRequestor: P2): R;
      _performServiceFromEntry_withPasteboard_withRequestor_withCarbonFocus_withSendTypes_withReturnTypes_canReleasePasteboardImmediately<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void, P4 = unknown, P5 = unknown, P6 = string>(__performServiceFromEntry: P0, _withPasteboard: P1, _withRequestor: P2, _withCarbonFocus: P3, _withSendTypes: P4, _withReturnTypes: P5, _canReleasePasteboardImmediately: P6): R;
      _runWorkflowForServiceEntry_withPasteboard_returnDataExpected_errorString<R = number, P0 = unknown, P1 = unknown, P2 = boolean, P3 = unknown>(__runWorkflowForServiceEntry: P0, _withPasteboard: P1, _returnDataExpected: P2, _errorString: P3): R;
      _taskDidFinish<R = void, P0 = unknown>(__taskDidFinish: P0): R;
      _requestorStartingWithChain_forProposedSendTypes_proposedReturnTypes_sendTypes_returnTypes<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown>(__requestorStartingWithChain: P0, _forProposedSendTypes: P1, _proposedReturnTypes: P2, _sendTypes: P3, _returnTypes: P4): R;
      worksWhenModal<R = boolean>(): R;
    }
  }
}

declare const NSServicesMenuHandler: cocoa.NSServicesMenuHandler.CLASS;
