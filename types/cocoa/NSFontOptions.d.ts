/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFontOptions<T0 = void, T1 = void, T2 = void> extends NSObject {
    selectAllInView_selectionOnly_fontFamily_font_characterStyle_paragraphStyle<R = void, P0 = unknown, P1 = boolean, P2 = boolean, P3 = boolean, P4 = boolean, P5 = boolean>(_selectAllInView: P0, _selectionOnly: P1, _fontFamily: P2, _font: P3, _characterStyle: P4, _paragraphStyle: P5): R;
    sheetDidEnd_returnCode_contextInfo<R = void, P0 = unknown, P1 = number, P2 = void>(_sheetDidEnd: P0, _returnCode: P1, _contextInfo: P2): R;
    removeFavoriteInWindow<R = void, P0 = unknown>(_removeFavoriteInWindow: P0): R;
    addFavoriteInWindow<R = void, P0 = unknown>(_addFavoriteInWindow: P0): R;
    addFavorite<R = void>(): R;
    cancelSheet<R = void, P0 = unknown>(_cancelSheet: P0): R;
    confirmSheet<R = void, P0 = unknown>(_confirmSheet: P0): R;
    controlTextDidChange<R = void, P0 = unknown>(_controlTextDidChange: P0): R;
    windowWillClose<R = void, P0 = unknown>(_windowWillClose: P0): R;
    changeOptionsPanelSettings<R = void, P0 = unknown>(_changeOptionsPanelSettings: P0): R;
    selectNextRangeForward<R = void, P0 = boolean>(_selectNextRangeForward: P0): R;
    selectFarthestRangeForward<R = void, P0 = boolean>(_selectFarthestRangeForward: P0): R;
    selectDefaultRange<R = void>(): R;
    stringForRange<R = unknown, P0 = _NSRange>(_stringForRange: P0): R;
    modifyOptionsViaPanel<R = void, P0 = unknown>(_modifyOptionsViaPanel: P0): R;
    convertAttributes<R = unknown, P0 = unknown>(_convertAttributes: P0): R;
    optionsAttributes<R = unknown>(): R;
    setOptionsAttributes_string<R = void, P0 = unknown, P1 = unknown>(_setOptionsAttributes: P0, _string: P1): R;
    selectedAttributes<R = unknown>(): R;
    setSelectedAttributes_isMultiple<R = void, P0 = unknown, P1 = boolean>(_setSelectedAttributes: P0, _isMultiple: P1): R;
    textView_shouldSetColor<R = boolean, P0 = unknown, P1 = unknown>(_textView: P0, _shouldSetColor: P1): R;
    orderFrontFontPanel<R = void, P0 = unknown>(_orderFrontFontPanel: P0): R;
    orderFrontStylesPanelInWindow_textView<R = void, P0 = unknown, P1 = unknown>(_orderFrontStylesPanelInWindow: P0, _textView: P1): R;
    orderFrontStylesPanel<R = void, P0 = unknown>(_orderFrontStylesPanel: P0): R;
    getStylesPanelTextView_window<R = boolean, P0 = unknown, P1 = unknown>(_getStylesPanelTextView: P0, _window: P1): R;
    orderFrontFontOptionsPanel<R = void, P0 = unknown>(_orderFrontFontOptionsPanel: P0): R;
    orderFrontColorOptionsPanelInWindow<R = void, P0 = unknown>(_orderFrontColorOptionsPanelInWindow: P0): R;
    updateFavoritesUI<R = void>(): R;
    favoriteAttributesForName<R = unknown, P0 = unknown>(_favoriteAttributesForName: P0): R;
    favoriteAttributesNames<R = unknown>(): R;
    updateColorOptionsUI<R = void>(): R;
    updateOptionsUI<R = void>(): R;
    displayStringsForParagraphStyle<R = unknown, P0 = unknown>(_displayStringsForParagraphStyle: P0): R;
    displayStringsForAttributes_includeBoldItalic<R = unknown, P0 = unknown, P1 = boolean>(_displayStringsForAttributes: P0, _includeBoldItalic: P1): R;
    updateUI<R = void>(): R;
    enableAll<R = void, P0 = boolean>(_enableAll: P0): R;
    dealloc<R = void>(): R;
    loadUI<R = void>(): R;
    updateFavoritesFromDefaults<R = void>(): R;
    saveFavoritesToDefaults<R = void>(): R;
    storedAttributes<R = unknown>(): R;
  }
  namespace NSFontOptions {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSFontOptions>(): R;
      new: <R = NSFontOptions>() => R;
      sharedFontOptions<R = unknown>(): R;
    }
  }
}

declare const NSFontOptions: cocoa.NSFontOptions.CLASS;
