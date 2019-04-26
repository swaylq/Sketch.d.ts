/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentationSearchEntry<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    show<R = void>(): R;
    matchesSearchQuery<R = boolean, P0 = unknown>(_matchesSearchQuery: P0): R;
    titles<R = unknown>(): R;
    isDuplicateResult<R = boolean>(): R;
    setIsDuplicateResult<R = void, P0 = boolean>(_v: P0): R;
    data<R = NSDictionary>(): R;
    setData<R = void, P0 = NSDictionary>(_v: P0): R;
  }
  namespace MSDocumentationSearchEntry {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSDocumentationSearchEntry>(): R;
      new: <R = MSDocumentationSearchEntry>() => R;
      markSearchEntriesAsDuplicates<R = void, P0 = unknown>(_markSearchEntriesAsDuplicates: P0): R;
      searchEntryWithDictionary<R = unknown, P0 = unknown>(_searchEntryWithDictionary: P0): R;
    }
  }
}

declare const MSDocumentationSearchEntry: cocoa.MSDocumentationSearchEntry.CLASS;
