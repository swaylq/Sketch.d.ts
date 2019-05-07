/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSColorPanelToolbar<T0 = void, T1 = void, T2 = void> extends NSToolbar, NSToolbarDelegateProtocol {
    syncWithRemoteToolbars<R = void>(): R;
    _colorPickerWithIdentifier<R = unknown, P0 = unknown>(__colorPickerWithIdentifier: P0): R;
    _itemIdentifiersForColorPickers<R = unknown, P0 = unknown>(__itemIdentifiersForColorPickers: P0): R;
    _tooltipForColorPicker<R = unknown, P0 = unknown>(__tooltipForColorPicker: P0): R;
    _imageForColorPicker<R = unknown, P0 = unknown>(__imageForColorPicker: P0): R;
    _labelForColorPicker<R = unknown, P0 = unknown>(__labelForColorPicker: P0): R;
    configurationDictionary<R = unknown>(): R;
    _isMoving<R = boolean>(): R;
    displayMode<R = number>(): R;
    sizeMode<R = number>(): R;
    setSizeMode<R = void, P0 = number>(_setSizeMode: P0): R;
    setDisplayMode<R = void, P0 = number>(_setDisplayMode: P0): R;
    colorPanelDidSelectColorPicker<R = void, P0 = unknown>(_colorPanelDidSelectColorPicker: P0): R;
    itemIdentifierForColorPicker<R = unknown, P0 = unknown>(_itemIdentifierForColorPicker: P0): R;
    _prefersToBeShown<R = boolean>(): R;
    refusesToBeShown<R = boolean>(): R;
    setRefusesToBeShown<R = void, P0 = boolean>(_setRefusesToBeShown: P0): R;
    setVisible<R = void, P0 = boolean>(_setVisible: P0): R;
    dealloc<R = void>(): R;
    initWithIdentifier_forColorPanel<R = unknown, P0 = unknown, P1 = unknown>(_initWithIdentifier: P0, _forColorPanel: P1): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSColorPanelToolbar {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSToolbar, NSToolbarDelegateProtocol {
      alloc<R = _NSColorPanelToolbar>(): R;
      new: <R = _NSColorPanelToolbar>() => R;
      attachToolbarToColorPanel<R = void, P0 = unknown>(_attachToolbarToColorPanel: P0): R;
    }
  }
}
