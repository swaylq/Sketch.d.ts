/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerListBadgeConfigurator<T0 = void, T1 = void, T2 = void> extends NSObject, MSInterfaceImageOwnerProtocol, NSMenuDelegateProtocol, BCOutlineViewPopupConfiguratorProtocol {
    cxx_destruct<R = void>(): R;
    onBooleanOperation<R = void, P0 = unknown>(_onBooleanOperation: P0): R;
    updateImagesOnMenu_withSelectedItem<R = void, P0 = unknown, P1 = unknown>(_updateImagesOnMenu: P0, _withSelectedItem: P1): R;
    imageForOperation_withState<R = unknown, P0 = number, P1 = number>(_imageForOperation: P0, _withState: P1): R;
    badgeMenuItemWithTag<R = unknown, P0 = number>(_badgeMenuItemWithTag: P0): R;
    templateMenu<R = unknown>(): R;
    initWithLayer<R = unknown, P0 = unknown>(_initWithLayer: P0): R;
    isOpen<R = boolean>(): R;
    setIsOpen<R = void, P0 = boolean>(_v: P0): R;
    popup<R = NSPopUpButton>(): R;
    setPopup<R = void, P0 = NSPopUpButton>(_v: P0): R;
    layer<R = MSLayer>(): R;
    setLayer<R = void, P0 = MSLayer>(_v: P0): R;
    interfaceImageIdentifier<R = NSString>(): R;
    cacheOwner<R = unknown>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSLayerListBadgeConfigurator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSInterfaceImageOwnerProtocol, NSMenuDelegateProtocol, BCOutlineViewPopupConfiguratorProtocol {
      alloc<R = MSLayerListBadgeConfigurator>(): R;
      new: <R = MSLayerListBadgeConfigurator>() => R;
      configuratorWithLayer<R = unknown, P0 = unknown>(_configuratorWithLayer: P0): R;
    }
  }
}

declare const MSLayerListBadgeConfigurator: cocoa.MSLayerListBadgeConfigurator.CLASS;
