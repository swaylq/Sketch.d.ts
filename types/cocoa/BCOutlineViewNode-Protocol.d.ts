/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCOutlineViewNodeProtocol<T = any> extends NSObjectProtocol {
    badgeMenuConfigurator<R = BCOutlineViewPopupConfigurator>(): R;
    maskIconWithState<R = NSImage, P0 = number>(_maskIconWithState: P0): R;
    previewIconWithState<R = NSImage, P0 = number>(_previewIconWithState: P0): R;
    isExpanded<R = boolean>(): R;
    badgeImages<R = MSTintedImages>(): R;
    hasBadgedIcon<R = boolean>(): R;
    isEditableInLayerList<R = boolean>(): R;
    isActive<R = boolean>(): R;
    nodeName<R = NSString>(): R;
    setNodeName<R = void, P0 = NSString>(_v: P0): R;
    filterTypeMask<R = number>(): R;
    displayType<R = number>(): R;
  }
  namespace classes {
    export interface BCOutlineViewNodeProtocol<T = any> extends NSObjectProtocol {  }
  }
}
