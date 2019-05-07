/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNestedInspectorSection<T0 = void, T1 = void, T2 = void> extends MSBaseInspectorSection, MSInspectorSectionDelegateProtocol {}
  namespace MSNestedInspectorSection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseInspectorSection, MSInspectorSectionDelegateProtocol {
      alloc<R = MSNestedInspectorSection>(): R;
      new: <R = MSNestedInspectorSection>() => R;
    }
  }
}

declare const MSNestedInspectorSection: cocoa.MSNestedInspectorSection.CLASS;
