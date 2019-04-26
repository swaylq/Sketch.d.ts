/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudReuploadViewController<T0 = void, T1 = void, T2 = void> extends MSCloudBaseViewController {
    cancel<R = void, P0 = unknown>(_cancel: P0): R;
    upload<R = void, P0 = unknown>(_upload: P0): R;
    cancelButton<R = NSButton>(): R;
    setCancelButton<R = void, P0 = NSButton>(_v: P0): R;
    uploadButton<R = NSButton>(): R;
    setUploadButton<R = void, P0 = NSButton>(_v: P0): R;
    buttonStackView<R = NSStackView>(): R;
    setButtonStackView<R = void, P0 = NSStackView>(_v: P0): R;
  }
  namespace MSCloudReuploadViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSCloudBaseViewController {
      alloc<R = MSCloudReuploadViewController>(): R;
      new: <R = MSCloudReuploadViewController>() => R;
    }
  }
}

declare const MSCloudReuploadViewController: cocoa.MSCloudReuploadViewController.CLASS;
