/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudDocumentViewController<T0 = void, T1 = void, T2 = void> extends MSCloudBaseViewController {
    openShareSettings<R = void, P0 = unknown>(_openShareSettings: P0): R;
    openPublicURL<R = void, P0 = unknown>(_openPublicURL: P0): R;
    update<R = void, P0 = unknown>(_update: P0): R;
    upload<R = void, P0 = unknown>(_upload: P0): R;
    documentDidChangeNotification<R = void, P0 = unknown>(_documentDidChangeNotification: P0): R;
    reloadTitleLabel<R = void>(): R;
    scheduledTimeLabelUpdateFired<R = void, P0 = unknown>(_scheduledTimeLabelUpdateFired: P0): R;
    scheduleTimeLabelUpdate<R = void>(): R;
    reloadTimeLabel<R = void>(): R;
    reloadData<R = void>(): R;
    edgeInsets<R = NSEdgeInsets>(): R;
    timeLabelUpdateTimer<R = NSTimer>(): R;
    setTimeLabelUpdateTimer<R = void, P0 = NSTimer>(_v: P0): R;
    permissionLabel<R = NSTextField>(): R;
    setPermissionLabel<R = void, P0 = NSTextField>(_v: P0): R;
    settingsButton<R = NSButton>(): R;
    setSettingsButton<R = void, P0 = NSButton>(_v: P0): R;
    linkButton<R = MSCursorButton>(): R;
    setLinkButton<R = void, P0 = MSCursorButton>(_v: P0): R;
    uploadButtonWidthConstraint<R = NSLayoutConstraint>(): R;
    setUploadButtonWidthConstraint<R = void, P0 = NSLayoutConstraint>(_v: P0): R;
    updateButton<R = NSButton>(): R;
    setUpdateButton<R = void, P0 = NSButton>(_v: P0): R;
    uploadButton<R = NSButton>(): R;
    setUploadButton<R = void, P0 = NSButton>(_v: P0): R;
    buttonStackView<R = NSStackView>(): R;
    setButtonStackView<R = void, P0 = NSStackView>(_v: P0): R;
    canUpdateShare<R = boolean>(): R;
    share<R = SCKShare>(): R;
  }
  namespace MSCloudDocumentViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSCloudBaseViewController {
      alloc<R = MSCloudDocumentViewController>(): R;
      new: <R = MSCloudDocumentViewController>() => R;
    }
  }
}

declare const MSCloudDocumentViewController: cocoa.MSCloudDocumentViewController.CLASS;
