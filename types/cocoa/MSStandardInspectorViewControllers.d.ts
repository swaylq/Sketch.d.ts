/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStandardInspectorViewControllers<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    exportPreviewViewController<R = MSExportPreviewInspectorSection>(): R;
    specialLayerViewController<R = MSSpecialLayerViewController>(): R;
    appearanceInspectorSection<R = MSAppearanceInspectorSection>(): R;
    flowInspectorViewController<R = MSFlowInspectorSection>(): R;
    styleSection<R = MSStyleInspectorSection>(): R;
    resizeSection<R = MSResizeInspectorSection>(): R;
    geometryViewController<R = MSGeometryInspectorSection>(): R;
  }
  namespace MSStandardInspectorViewControllers {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSStandardInspectorViewControllers>(): R;
      new: <R = MSStandardInspectorViewControllers>() => R;
    }
  }
}

declare const MSStandardInspectorViewControllers: cocoa.MSStandardInspectorViewControllers.CLASS;
