/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudUploadFailedViewController<T0 = void, T1 = void, T2 = void> extends MSCloudBaseViewController {
    retryUpload<R = void, P0 = unknown>(_retryUpload: P0): R;
    updateErrorDescription<R = void>(): R;
    retryButton<R = NSButton>(): R;
    setRetryButton<R = void, P0 = NSButton>(_v: P0): R;
    existingShare<R = SCKShare>(): R;
    setExistingShare<R = void, P0 = SCKShare>(_v: P0): R;
    error<R = NSError>(): R;
    setError<R = void, P0 = NSError>(_v: P0): R;
  }
  namespace MSCloudUploadFailedViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSCloudBaseViewController {
      alloc<R = MSCloudUploadFailedViewController>(): R;
      new: <R = MSCloudUploadFailedViewController>() => R;
    }
  }
}

declare const MSCloudUploadFailedViewController: cocoa.MSCloudUploadFailedViewController.CLASS;
