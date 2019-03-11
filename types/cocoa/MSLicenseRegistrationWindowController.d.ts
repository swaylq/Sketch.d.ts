/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLicenseRegistrationWindowController<T = any> extends cocoa.NSWindowController, cocoa.NSWindowDelegateProtocol {
    openLicenseManager<R = void, P0 = unknown>(_openLicenseManager: P0): R;
    renewLicense<R = void, P0 = unknown>(_renewLicense: P0): R;
    downloadPreviousVersion<R = void, P0 = unknown>(_downloadPreviousVersion: P0): R;
    openLicenseRecoveryPage<R = void, P0 = unknown>(_openLicenseRecoveryPage: P0): R;
    visitStore<R = void, P0 = unknown>(_visitStore: P0): R;
    registerLicense<R = void, P0 = unknown>(_registerLicense: P0): R;
    didCloseAllDocuments<R = void, P0 = unknown>(_didCloseAllDocuments: P0): R;
    closeDocumentsAndQuit<R = void>(): R;
    showContentView<R = void, P0 = unknown>(_showContentView: P0): R;
    renameButtonsToQuit<R = void, P0 = unknown>(_renameButtonsToQuit: P0): R;
    showButtonSet<R = void, P0 = unknown>(_showButtonSet: P0): R;
    showCopyForActiveLicense<R = void>(): R;
    showCopyForTrialExpired<R = void>(): R;
    loadInitialView<R = void>(): R;
    licenseChanged<R = void, P0 = unknown>(_licenseChanged: P0): R;
    transformToModal<R = void>(): R;
    initWithWindowNibName_modal_quitOnClose<R = unknown, P0 = unknown, P1 = boolean, P2 = boolean>(_initWithWindowNibName: P0, _modal: P1, _quitOnClose: P2): R;
    licenseUpdateExpirationDate<R = cocoa.NSDate>(): R;
    setLicenseUpdateExpirationDate<R = void, P0 = cocoa.NSDate>(_v: P0): R;
    registerButton<R = cocoa.NSButton>(): R;
    setRegisterButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    invalidLicenseButtons<R = cocoa.NSView>(): R;
    setInvalidLicenseButtons<R = void, P0 = cocoa.NSView>(_v: P0): R;
    tooManyDevicesButtons<R = cocoa.NSView>(): R;
    setTooManyDevicesButtons<R = void, P0 = cocoa.NSView>(_v: P0): R;
    notSupportedVersionButtons<R = cocoa.NSView>(): R;
    setNotSupportedVersionButtons<R = void, P0 = cocoa.NSView>(_v: P0): R;
    registrationCompletionButtons<R = cocoa.NSView>(): R;
    setRegistrationCompletionButtons<R = void, P0 = cocoa.NSView>(_v: P0): R;
    defaultButtons<R = cocoa.NSView>(): R;
    setDefaultButtons<R = void, P0 = cocoa.NSView>(_v: P0): R;
    buttonFooterView<R = cocoa.NSView>(): R;
    setButtonFooterView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    licenseDescriptionField<R = cocoa.NSTextField>(): R;
    setLicenseDescriptionField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    licenseTextField<R = cocoa.NSTextField>(): R;
    setLicenseTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    registrationCompletionBackgroundView<R = cocoa.NSImageView>(): R;
    setRegistrationCompletionBackgroundView<R = void, P0 = cocoa.NSImageView>(_v: P0): R;
    registrationCompletionView<R = cocoa.NSView>(): R;
    setRegistrationCompletionView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    backgroundImageView<R = cocoa.NSImageView>(): R;
    setBackgroundImageView<R = void, P0 = cocoa.NSImageView>(_v: P0): R;
    licenseView<R = cocoa.NSView>(): R;
    setLicenseView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    contentView<R = cocoa.NSView>(): R;
    setContentView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    descriptionTextField<R = cocoa.NSTextField>(): R;
    setDescriptionTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    titleTextField<R = cocoa.NSTextField>(): R;
    setTitleTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    runningAsModal<R = boolean>(): R;
    checkForAvailableUpdates<R = boolean>(): R;
    setCheckForAvailableUpdates<R = void, P0 = boolean>(_v: P0): R;
    shouldQuitOnWindowClose<R = boolean>(): R;
    setShouldQuitOnWindowClose<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSLicenseRegistrationWindowController<T = any> extends cocoa.classes.NSWindowController, cocoa.classes.NSWindowDelegateProtocol {
      alloc<R = MSLicenseRegistrationWindowController>(): R;
      new: <R = MSLicenseRegistrationWindowController>() => R;
      registerWithKey<R = void, P0 = unknown>(_registerWithKey: P0): R;
      showRegistrationWindow<R = void>(): R;
      showTrialExpiredModal<R = void>(): R;
    }
  }
}

declare const MSLicenseRegistrationWindowController: cocoa.classes.MSLicenseRegistrationWindowController;
