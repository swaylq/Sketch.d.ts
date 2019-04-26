/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudPreferencesIntroViewController<T0 = void, T1 = void, T2 = void> extends MSCloudPreferencesViewController {
    cxx_destruct<R = void>(): R;
    cloudEnvironmentDidChangeNotification<R = void, P0 = unknown>(_cloudEnvironmentDidChangeNotification: P0): R;
    updateTitleLabelValue<R = void>(): R;
    learnMore<R = void, P0 = unknown>(_learnMore: P0): R;
    signIn<R = void, P0 = unknown>(_signIn: P0): R;
    startButton<R = NSButton>(): R;
    setStartButton<R = void, P0 = NSButton>(_v: P0): R;
    progressIndicator<R = NSProgressIndicator>(): R;
    setProgressIndicator<R = void, P0 = NSProgressIndicator>(_v: P0): R;
    learnMoreButton<R = NSButton>(): R;
    setLearnMoreButton<R = void, P0 = NSButton>(_v: P0): R;
    descriptionLabel<R = NSTextField>(): R;
    setDescriptionLabel<R = void, P0 = NSTextField>(_v: P0): R;
    titleLabel<R = NSTextField>(): R;
    setTitleLabel<R = void, P0 = NSTextField>(_v: P0): R;
  }
  namespace MSCloudPreferencesIntroViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSCloudPreferencesViewController {
      alloc<R = MSCloudPreferencesIntroViewController>(): R;
      new: <R = MSCloudPreferencesIntroViewController>() => R;
    }
  }
}

declare const MSCloudPreferencesIntroViewController: cocoa.MSCloudPreferencesIntroViewController.CLASS;
