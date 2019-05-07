/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSearchFieldDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    searchFieldDidEndSearching<R = void, P0 = NSSearchField>(_searchFieldDidEndSearching: P0): R;
    searchFieldDidStartSearching<R = void, P0 = NSSearchField>(_searchFieldDidStartSearching: P0): R;
  }
  namespace NSSearchFieldDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
