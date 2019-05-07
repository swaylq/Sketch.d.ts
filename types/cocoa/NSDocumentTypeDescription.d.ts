/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentTypeDescription<T0 = void, T1 = void, T2 = void> extends NSObject {
    userActivityType<R = unknown>(): R;
    description<R = unknown>(): R;
    persistentStoreType<R = unknown>(): R;
    isNativeName<R = boolean, P0 = unknown>(_isNativeName: P0): R;
    getReadableNotWritable_names<R = void, P0 = boolean, P1 = unknown>(_getReadableNotWritable: P0, _names: P1): R;
    fileNameExtensionsAndHFSFileTypes<R = unknown>(): R;
    matchesAnyFile<R = boolean>(): R;
    exactlyMatchesFileNameExtensionOrHFSFileType<R = boolean, P0 = unknown>(_exactlyMatchesFileNameExtensionOrHFSFileType: P0): R;
    appSpecificPresentableNameForName<R = unknown, P0 = unknown>(_appSpecificPresentableNameForName: P0): R;
    isIdentifiedByName<R = boolean, P0 = unknown>(_isIdentifiedByName: P0): R;
    firstName<R = unknown>(): R;
    isViewableByThisApp<R = boolean>(): R;
    isEditableByThisApp<R = boolean>(): R;
    className<R = unknown>(): R;
    isIdentifiedByUTIs<R = boolean>(): R;
    dealloc<R = void>(): R;
    _initWithDeclaration_cachedNamesByAlias<R = unknown, P0 = unknown, P1 = unknown>(__initWithDeclaration: P0, _cachedNamesByAlias: P1): R;
  }
  namespace NSDocumentTypeDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSDocumentTypeDescription>(): R;
      new: <R = NSDocumentTypeDescription>() => R;
      _noneOrQuotingOfText<R = unknown, P0 = unknown>(__noneOrQuotingOfText: P0): R;
      _addUniqueNameOrNames_toNames<R = void, P0 = unknown, P1 = unknown>(__addUniqueNameOrNames: P0, _toNames: P1): R;
      descriptionsWithDeclarations<R = unknown, P0 = unknown>(_descriptionsWithDeclarations: P0): R;
      _validateDeclarationStrings_forKey<R = boolean, P0 = unknown, P1 = unknown>(__validateDeclarationStrings: P0, _forKey: P1): R;
      _validateDeclarationString_forKey<R = boolean, P0 = unknown, P1 = unknown>(__validateDeclarationString: P0, _forKey: P1): R;
      parsesLSItemContentTypes<R = boolean>(): R;
      aliasesByName<R = unknown>(): R;
      namesByAlias<R = unknown>(): R;
    }
  }
}

declare const NSDocumentTypeDescription: cocoa.NSDocumentTypeDescription.CLASS;
