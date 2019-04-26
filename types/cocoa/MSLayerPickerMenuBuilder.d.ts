/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerPickerMenuBuilder<T0 = void, T1 = void, T2 = void> extends MSMenuBuilder {
    shouldShowSubLayersForGroupInLayerPickerMenu<R = boolean, P0 = unknown>(_shouldShowSubLayersForGroupInLayerPickerMenu: P0): R;
    addLayerItem_toMenu_withInset<R = void, P0 = unknown, P1 = unknown, P2 = number>(_addLayerItem: P0, _toMenu: P1, _withInset: P2): R;
    addChildrenOfGroup_underPoint_toMenu_withInset<R = void, P0 = unknown, P1 = CGPoint, P2 = unknown, P3 = number>(_addChildrenOfGroup: P0, _underPoint: P1, _toMenu: P2, _withInset: P3): R;
    layerPickerMenuItemForPage_atPoint<R = unknown, P0 = unknown, P1 = CGPoint>(_layerPickerMenuItemForPage: P0, _atPoint: P1): R;
  }
  namespace MSLayerPickerMenuBuilder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSMenuBuilder {
      alloc<R = MSLayerPickerMenuBuilder>(): R;
      new: <R = MSLayerPickerMenuBuilder>() => R;
    }
  }
}

declare const MSLayerPickerMenuBuilder: cocoa.MSLayerPickerMenuBuilder.CLASS;
