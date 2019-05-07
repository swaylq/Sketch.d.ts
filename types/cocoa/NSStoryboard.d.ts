/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStoryboard<T0 = void, T1 = void, T2 = void> extends NSObject {
    debugDescription<R = unknown>(): R;
    description<R = unknown>(): R;
    _hasInitialController<R = boolean>(): R;
    instantiateInitialController<R = unknown>(): R;
    instantiateControllerWithIdentifier<R = unknown, P0 = unknown>(_instantiateControllerWithIdentifier: P0): R;
    instantiateControllerReferencedByPlaceholderWithIdentifier<R = unknown, P0 = unknown>(_instantiateControllerReferencedByPlaceholderWithIdentifier: P0): R;
    uniqueIDForControllerIdentifier<R = unknown, P0 = unknown>(_uniqueIDForControllerIdentifier: P0): R;
    _referencedStoryboardForExternalReferenceInfo<R = unknown, P0 = unknown>(__referencedStoryboardForExternalReferenceInfo: P0): R;
    nibForControllerWithIdentifier<R = unknown, P0 = unknown>(_nibForControllerWithIdentifier: P0): R;
    nibForStoryboardNibNamed<R = unknown, P0 = unknown>(_nibForStoryboardNibNamed: P0): R;
    storyboardBundle<R = unknown>(): R;
    containingBundle<R = unknown>(): R;
    _instantiateMainMenu<R = void, P0 = unknown>(__instantiateMainMenu: P0): R;
    containsNibNamed<R = boolean, P0 = unknown>(_containsNibNamed: P0): R;
    name<R = unknown>(): R;
    storyboardFileName<R = unknown>(): R;
    initWithName_bundle<R = unknown, P0 = unknown, P1 = unknown>(_initWithName: P0, _bundle: P1): R;
    dealloc<R = void>(): R;
    initWithBundle_storyboardFileName_identifierToNibNameMap_identifierToExternalStoryboardReferenceMap_identifierToUUIDMap_designatedEntryPointIdentifier_mainMenu<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = unknown, P6 = unknown>(_initWithBundle: P0, _storyboardFileName: P1, _identifierToNibNameMap: P2, _identifierToExternalStoryboardReferenceMap: P3, _identifierToUUIDMap: P4, _designatedEntryPointIdentifier: P5, _mainMenu: P6): R;
  }
  namespace NSStoryboard {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSStoryboard>(): R;
      new: <R = NSStoryboard>() => R;
      mainStoryboard<R = unknown>(): R;
      storyboardWithName_bundle<R = unknown, P0 = unknown, P1 = unknown>(_storyboardWithName: P0, _bundle: P1): R;
    }
  }
}

declare const NSStoryboard: cocoa.NSStoryboard.CLASS;
