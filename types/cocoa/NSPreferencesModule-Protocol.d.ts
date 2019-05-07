/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPreferencesModuleProtocol<T0 = void, T1 = void, T2 = void> {
    preferencesWindowShouldClose<R = boolean>(): R;
    moduleCanBeRemoved<R = boolean>(): R;
    moduleWasInstalled<R = void>(): R;
    moduleWillBeRemoved<R = void>(): R;
    didChange<R = void>(): R;
    initializeFromDefaults<R = void>(): R;
    willBeDisplayed<R = void>(): R;
    saveChanges<R = void>(): R;
    hasChangesPending<R = boolean>(): R;
    imageForPreferenceNamed<R = NSImage, P0 = NSString>(_imageForPreferenceNamed: P0): R;
    viewForPreferenceNamed<R = NSBox, P0 = NSString>(_viewForPreferenceNamed: P0): R;
  }
  namespace NSPreferencesModuleProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
