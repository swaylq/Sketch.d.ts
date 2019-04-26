/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudUploadViewController<T0 = void, T1 = void, T2 = void> extends MSCloudBaseViewController {
    updateProgress<R = void>(): R;
    cancel<R = void, P0 = unknown>(_cancel: P0): R;
    progressDidChangeNotification<R = void, P0 = unknown>(_progressDidChangeNotification: P0): R;
    edgeInsets<R = NSEdgeInsets>(): R;
    arrowView<R = MSCloudUploadArrowView>(): R;
    setArrowView<R = void, P0 = MSCloudUploadArrowView>(_v: P0): R;
    cancelButton<R = NSButton>(): R;
    setCancelButton<R = void, P0 = NSButton>(_v: P0): R;
    progressIndicator<R = NSProgressIndicator>(): R;
    setProgressIndicator<R = void, P0 = NSProgressIndicator>(_v: P0): R;
    buttonStackView<R = NSStackView>(): R;
    setButtonStackView<R = void, P0 = NSStackView>(_v: P0): R;
  }
  namespace MSCloudUploadViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSCloudBaseViewController {
      alloc<R = MSCloudUploadViewController>(): R;
      new: <R = MSCloudUploadViewController>() => R;
    }
  }
}

declare const MSCloudUploadViewController: cocoa.MSCloudUploadViewController.CLASS;
