/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLicenseRegistrationWindowController<T0 = void, T1 = void, T2 = void> extends NSWindowController, NSWindowDelegateProtocol {
    cxx_destruct<R = void>(): R;
    openLicenseManager<R = void, P0 = unknown>(_openLicenseManager: P0): R;
    renewLicense<R = void, P0 = unknown>(_renewLicense: P0): R;
    downloadPreviousVersion<R = void, P0 = unknown>(_downloadPreviousVersion: P0): R;
    openLicenseRecoveryPage<R = void, P0 = unknown>(_openLicenseRecoveryPage: P0): R;
    signInToCloud<R = void, P0 = unknown>(_signInToCloud: P0): R;
    visitStore<R = void, P0 = unknown>(_visitStore: P0): R;
    registerLicense<R = void, P0 = unknown>(_registerLicense: P0): R;
    didCloseAllDocuments<R = void, P0 = unknown>(_didCloseAllDocuments: P0): R;
    closeDocumentsAndQuit<R = void>(): R;
    showContentView<R = void, P0 = unknown>(_showContentView: P0): R;
    renameButtonsToQuit<R = void, P0 = unknown>(_renameButtonsToQuit: P0): R;
    showButtonSet<R = void, P0 = unknown>(_showButtonSet: P0): R;
    showCompletedRegistration<R = void>(): R;
    showCopyForActiveLicense<R = void>(): R;
    showCopyForTrialExpired<R = void>(): R;
    loadInitialView<R = void>(): R;
    windowDidLoad<R = void>(): R;
    licenseChanged<R = void, P0 = unknown>(_licenseChanged: P0): R;
    transformToModal<R = void>(): R;
    initWithWindowNibName_modal_quitOnClose<R = unknown, P0 = unknown, P1 = boolean, P2 = boolean>(_initWithWindowNibName: P0, _modal: P1, _quitOnClose: P2): R;
    licenseUpdateExpirationDate<R = NSDate>(): R;
    setLicenseUpdateExpirationDate<R = void, P0 = NSDate>(_v: P0): R;
    cloudButton<R = NSButton>(): R;
    setCloudButton<R = void, P0 = NSButton>(_v: P0): R;
    registerButton<R = NSButton>(): R;
    setRegisterButton<R = void, P0 = NSButton>(_v: P0): R;
    invalidLicenseButtons<R = NSView>(): R;
    setInvalidLicenseButtons<R = void, P0 = NSView>(_v: P0): R;
    tooManyDevicesButtons<R = NSView>(): R;
    setTooManyDevicesButtons<R = void, P0 = NSView>(_v: P0): R;
    notSupportedVersionButtons<R = NSView>(): R;
    setNotSupportedVersionButtons<R = void, P0 = NSView>(_v: P0): R;
    registrationCompletionButtons<R = NSView>(): R;
    setRegistrationCompletionButtons<R = void, P0 = NSView>(_v: P0): R;
    defaultButtons<R = NSView>(): R;
    setDefaultButtons<R = void, P0 = NSView>(_v: P0): R;
    buttonFooterView<R = NSView>(): R;
    setButtonFooterView<R = void, P0 = NSView>(_v: P0): R;
    licenseDescriptionField<R = NSTextField>(): R;
    setLicenseDescriptionField<R = void, P0 = NSTextField>(_v: P0): R;
    licenseTextField<R = NSTextField>(): R;
    setLicenseTextField<R = void, P0 = NSTextField>(_v: P0): R;
    registrationCompletionBackgroundView<R = NSImageView>(): R;
    setRegistrationCompletionBackgroundView<R = void, P0 = NSImageView>(_v: P0): R;
    registrationCompletionView<R = NSView>(): R;
    setRegistrationCompletionView<R = void, P0 = NSView>(_v: P0): R;
    backgroundImageView<R = NSImageView>(): R;
    setBackgroundImageView<R = void, P0 = NSImageView>(_v: P0): R;
    licenseView<R = NSView>(): R;
    setLicenseView<R = void, P0 = NSView>(_v: P0): R;
    contentView<R = NSView>(): R;
    setContentView<R = void, P0 = NSView>(_v: P0): R;
    descriptionTextField<R = NSTextField>(): R;
    setDescriptionTextField<R = void, P0 = NSTextField>(_v: P0): R;
    titleTextField<R = NSTextField>(): R;
    setTitleTextField<R = void, P0 = NSTextField>(_v: P0): R;
    runningAsModal<R = boolean>(): R;
    checkForAvailableUpdates<R = boolean>(): R;
    setCheckForAvailableUpdates<R = void, P0 = boolean>(_v: P0): R;
    shouldQuitOnWindowClose<R = boolean>(): R;
    setShouldQuitOnWindowClose<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSLicenseRegistrationWindowController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindowController, NSWindowDelegateProtocol {
      alloc<R = MSLicenseRegistrationWindowController>(): R;
      new: <R = MSLicenseRegistrationWindowController>() => R;
      registerWithKey<R = void, P0 = unknown>(_registerWithKey: P0): R;
      showRegistrationWindow<R = void>(): R;
      showTrialExpiredModal<R = void>(): R;
    }
  }
}

declare const MSLicenseRegistrationWindowController: cocoa.MSLicenseRegistrationWindowController.CLASS;
