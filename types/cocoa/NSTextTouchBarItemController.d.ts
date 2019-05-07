/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextTouchBarItemController<T0 = void, T1 = void, T2 = void> extends NSObject {
    _showTextListPanel<R = void, P0 = unknown>(__showTextListPanel: P0): R;
    _changeTextList<R = void, P0 = unknown>(__changeTextList: P0): R;
    _changeTextAlignment<R = void, P0 = unknown>(__changeTextAlignment: P0): R;
    _reconfigureTextStyle<R = void>(): R;
    _changeTextStyle<R = void, P0 = unknown>(__changeTextStyle: P0): R;
    _changeTextColor<R = void, P0 = unknown>(__changeTextColor: P0): R;
    setSelectedAttributesWithEnumrator<R = void, P0 = CDUnknownBlockType>(_setSelectedAttributesWithEnumrator: P0): R;
    setSelectedAttributes_isMultiple<R = void, P0 = unknown, P1 = boolean>(_setSelectedAttributes: P0, _isMultiple: P1): R;
    loadNib<R = void>(): R;
    itemForIdentifier<R = unknown, P0 = unknown>(_itemForIdentifier: P0): R;
    dealloc<R = void>(): R;
    textList<R = NSButton>(): R;
    setTextList<R = void, P0 = NSButton>(_v: P0): R;
    textAlignments<R = NSSegmentedControl>(): R;
    setTextAlignments<R = void, P0 = NSSegmentedControl>(_v: P0): R;
    textAlignment<R = NSButton>(): R;
    setTextAlignment<R = void, P0 = NSButton>(_v: P0): R;
    textStyle<R = NSSegmentedControl>(): R;
    setTextStyle<R = void, P0 = NSSegmentedControl>(_v: P0): R;
    colorPicker<R = NSButton>(): R;
    setColorPicker<R = void, P0 = NSButton>(_v: P0): R;
    textListViewController<R = NSViewController>(): R;
    setTextListViewController<R = void, P0 = NSViewController>(_v: P0): R;
    client<R = NSTextTouchBarItemControllerClient>(): R;
    setClient<R = void, P0 = NSTextTouchBarItemControllerClient>(_v: P0): R;
    usesNarrowTextStyleItem<R = boolean>(): R;
    setUsesNarrowTextStyleItem<R = void, P0 = boolean>(_v: P0): R;
    effectiveTextListViewController<R = NSViewController>(): R;
    textFormatItem<R = NSGroupTouchBarItem>(): R;
    textListItem<R = NSPopoverTouchBarItem>(): R;
    textAlignmentItem<R = NSPopoverTouchBarItem>(): R;
    textStyleItem<R = NSCustomTouchBarItem>(): R;
    colorPickerItem<R = NSColorPickerTouchBarItem>(): R;
  }
  namespace NSTextTouchBarItemController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTextTouchBarItemController>(): R;
      new: <R = NSTextTouchBarItemController>() => R;
      nibForItems<R = unknown>(): R;
    }
  }
}

declare const NSTextTouchBarItemController: cocoa.NSTextTouchBarItemController.CLASS;
