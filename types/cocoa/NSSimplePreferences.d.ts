/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSimplePreferences<T0 = void, T1 = void, T2 = void> extends NSPreferences {
    _createGroupBoxForChildGrid_title_footer<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__createGroupBoxForChildGrid: P0, _title: P1, _footer: P2): R;
    _insertRadioGroupForItem_label_intoGrid_bundle_stringsTable<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown>(__insertRadioGroupForItem: P0, _label: P1, _intoGrid: P2, _bundle: P3, _stringsTable: P4): R;
    _createPopUpButtonForItem_bundle_stringsTable<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__createPopUpButtonForItem: P0, _bundle: P1, _stringsTable: P2): R;
    _createToggleControlForItem_valueKeyPath_bindOptions_title_inBundle_stringsTable<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = unknown>(__createToggleControlForItem: P0, _valueKeyPath: P1, _bindOptions: P2, _title: P3, _inBundle: P4, _stringsTable: P5): R;
    _createSliderFor<R = unknown, P0 = unknown>(__createSliderFor: P0): R;
    _createFieldForTitleItem<R = unknown, P0 = unknown>(__createFieldForTitleItem: P0): R;
    _insertFooterText_intoGrid<R = void, P0 = unknown, P1 = unknown>(__insertFooterText: P0, _intoGrid: P1): R;
    _createGridViewWithIdentifier<R = unknown, P0 = unknown>(__createGridViewWithIdentifier: P0): R;
    _viewForItems_rootBundle<R = unknown, P0 = unknown, P1 = unknown>(__viewForItems: P0, _rootBundle: P1): R;
    _boxWithCenteredContent_contentHuggingPriority<R = unknown, P0 = unknown, P1 = number>(__boxWithCenteredContent: P0, _contentHuggingPriority: P1): R;
    _addTabForSettingsPlist_inBundle_withTitle<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__addTabForSettingsPlist: P0, _inBundle: P1, _withTitle: P2): R;
    loadFromSettingsBundle<R = void>(): R;
    settingsBundlePathToUse<R = unknown>(): R;
    _horizontalBasePriority<R = number>(): R;
  }
  namespace NSSimplePreferences {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPreferences {
      alloc<R = NSSimplePreferences>(): R;
      new: <R = NSSimplePreferences>() => R;
      setBundleToSearch<R = void, P0 = unknown>(_setBundleToSearch: P0): R;
    }
  }
}

declare const NSSimplePreferences: cocoa.NSSimplePreferences.CLASS;
