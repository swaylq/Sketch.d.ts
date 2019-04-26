/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorSectionProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    views<R = NSArray>(): R;
    sectionWithIdentifierWillCollapse<R = void, P0 = NSString>(_sectionWithIdentifierWillCollapse: P0): R;
    footerViews<R = NSArray>(): R;
    separatorInsets<R = NSEdgeInsets>(): R;
    wantsSeparatorAfterViews<R = boolean>(): R;
  }
  namespace MSInspectorSectionProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
