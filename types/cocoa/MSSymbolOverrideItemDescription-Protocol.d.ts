/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolOverrideItemDescriptionProtocol<T0 = void, T1 = void, T2 = void> {
    overrideRepresentation<R = MSOverrideRepresentation>(): R;
    placeholderIdentifier<R = NSNumber>(): R;
  }
  namespace MSSymbolOverrideItemDescriptionProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
