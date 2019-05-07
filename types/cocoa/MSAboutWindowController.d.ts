/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAboutWindowController<T0 = void, T1 = void, T2 = void> extends NSWindowController {
    cxx_destruct<R = void>(): R;
    unregisterWithPrompt<R = boolean>(): R;
    fetchRemoteUpdateExpirationDate<R = void>(): R;
    unlinkDevice<R = void, P0 = unknown>(_unlinkDevice: P0): R;
    registerLicense<R = void, P0 = unknown>(_registerLicense: P0): R;
    showRenewLicensePage<R = void, P0 = unknown>(_showRenewLicensePage: P0): R;
    showPurchaseLicensePage<R = void, P0 = unknown>(_showPurchaseLicensePage: P0): R;
    showAcknowledgementsPage<R = void, P0 = unknown>(_showAcknowledgementsPage: P0): R;
    showAboutUsPage<R = void, P0 = unknown>(_showAboutUsPage: P0): R;
    refreshTrialNoteWithLicenseManager<R = void, P0 = unknown>(_refreshTrialNoteWithLicenseManager: P0): R;
    refreshLicenseStatusViewWithLicenseManager<R = void, P0 = unknown>(_refreshLicenseStatusViewWithLicenseManager: P0): R;
    refreshRegisteredToView<R = void, P0 = unknown>(_refreshRegisteredToView: P0): R;
    refresh<R = void>(): R;
    windowDidLoad<R = void>(): R;
    remoteUpdateExpirationDate<R = NSDate>(): R;
    setRemoteUpdateExpirationDate<R = void, P0 = NSDate>(_v: P0): R;
    versionTextField<R = NSTextField>(): R;
    setVersionTextField<R = void, P0 = NSTextField>(_v: P0): R;
    variantNameTextField<R = NSTextField>(): R;
    setVariantNameTextField<R = void, P0 = NSTextField>(_v: P0): R;
    unlinkDeviceButton<R = NSButton>(): R;
    setUnlinkDeviceButton<R = void, P0 = NSButton>(_v: P0): R;
    trialNoteTextField<R = NSTextField>(): R;
    setTrialNoteTextField<R = void, P0 = NSTextField>(_v: P0): R;
    renewLicenseButton<R = NSButton>(): R;
    setRenewLicenseButton<R = void, P0 = NSButton>(_v: P0): R;
    registeredToTextField<R = NSTextField>(): R;
    setRegisteredToTextField<R = void, P0 = NSTextField>(_v: P0): R;
    purchaseLicenseButton<R = NSButton>(): R;
    setPurchaseLicenseButton<R = void, P0 = NSButton>(_v: P0): R;
    expirationDateTextField<R = NSTextField>(): R;
    setExpirationDateTextField<R = void, P0 = NSTextField>(_v: P0): R;
    expirationTitleTextField<R = NSTextField>(): R;
    setExpirationTitleTextField<R = void, P0 = NSTextField>(_v: P0): R;
    copyrightTextField<R = NSTextField>(): R;
    setCopyrightTextField<R = void, P0 = NSTextField>(_v: P0): R;
    buildNumberTextField<R = NSTextField>(): R;
    setBuildNumberTextField<R = void, P0 = NSTextField>(_v: P0): R;
    backgroundImageView<R = MSThemeImageView>(): R;
    setBackgroundImageView<R = void, P0 = MSThemeImageView>(_v: P0): R;
  }
  namespace MSAboutWindowController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindowController {
      alloc<R = MSAboutWindowController>(): R;
      new: <R = MSAboutWindowController>() => R;
      showAboutWindow<R = void>(): R;
    }
  }
}

declare const MSAboutWindowController: cocoa.MSAboutWindowController.CLASS;
