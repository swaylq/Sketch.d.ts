/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUnavailableUpdatesWindowController<T0 = void, T1 = void, T2 = void> extends NSWindowController, NSWindowDelegateProtocol {
    cxx_destruct<R = void>(): R;
    learnMore<R = void, P0 = unknown>(_learnMore: P0): R;
    openUpdatesPage<R = void, P0 = unknown>(_openUpdatesPage: P0): R;
    confirmationAction<R = void, P0 = unknown>(_confirmationAction: P0): R;
    renewalRequired<R = boolean>(): R;
    windowDidLoad<R = void>(): R;
    initWithWindowNibName_version_buildNumber_reason<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number>(_initWithWindowNibName: P0, _version: P1, _buildNumber: P2, _reason: P3): R;
    blockedUpdateReason<R = number>(): R;
    setBlockedUpdateReason<R = void, P0 = number>(_v: P0): R;
    lastBuildNumber<R = NSString>(): R;
    setLastBuildNumber<R = void, P0 = NSString>(_v: P0): R;
    lastVersion<R = NSString>(): R;
    setLastVersion<R = void, P0 = NSString>(_v: P0): R;
    confirmationButton<R = NSButton>(): R;
    setConfirmationButton<R = void, P0 = NSButton>(_v: P0): R;
    headerTextField<R = NSTextField>(): R;
    setHeaderTextField<R = void, P0 = NSTextField>(_v: P0): R;
    descriptionTextField<R = NSTextField>(): R;
    setDescriptionTextField<R = void, P0 = NSTextField>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSUnavailableUpdatesWindowController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindowController, NSWindowDelegateProtocol {
      alloc<R = MSUnavailableUpdatesWindowController>(): R;
      new: <R = MSUnavailableUpdatesWindowController>() => R;
      showModalWithVersion_buildNumber_reason<R = void, P0 = unknown, P1 = unknown, P2 = number>(_showModalWithVersion: P0, _buildNumber: P1, _reason: P2): R;
    }
  }
}

declare const MSUnavailableUpdatesWindowController: cocoa.MSUnavailableUpdatesWindowController.CLASS;
