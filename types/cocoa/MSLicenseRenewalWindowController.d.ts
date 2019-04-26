/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLicenseRenewalWindowController<T0 = void, T1 = void, T2 = void> extends NSWindowController, NSWindowDelegateProtocol {
    cxx_destruct<R = void>(): R;
    didCloseAllDocuments<R = void, P0 = unknown>(_didCloseAllDocuments: P0): R;
    closeDocumentsAndQuitWithURL<R = void, P0 = unknown>(_closeDocumentsAndQuitWithURL: P0): R;
    learnMore<R = void, P0 = unknown>(_learnMore: P0): R;
    renewLicense<R = void, P0 = unknown>(_renewLicense: P0): R;
    downloadPreviousVersion<R = void, P0 = unknown>(_downloadPreviousVersion: P0): R;
    revertToTrial<R = void, P0 = unknown>(_revertToTrial: P0): R;
    windowDidLoad<R = void>(): R;
    learnMoreButton<R = NSButton>(): R;
    setLearnMoreButton<R = void, P0 = NSButton>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSLicenseRenewalWindowController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindowController, NSWindowDelegateProtocol {
      alloc<R = MSLicenseRenewalWindowController>(): R;
      new: <R = MSLicenseRenewalWindowController>() => R;
      showLicenseUpdateWindow<R = void>(): R;
    }
  }
}

declare const MSLicenseRenewalWindowController: cocoa.MSLicenseRenewalWindowController.CLASS;
