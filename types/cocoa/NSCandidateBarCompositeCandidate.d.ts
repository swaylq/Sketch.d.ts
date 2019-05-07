/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCandidateBarCompositeCandidate<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    isEmojiCandidate<R = boolean>(): R;
    isSimpleCandidate<R = boolean>(): R;
    hasContent<R = boolean>(): R;
    string<R = unknown>(): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithImage_attributedString<R = unknown, P0 = unknown, P1 = unknown>(_initWithImage: P0, _attributedString: P1): R;
    initWithImage_attributedString_spacing<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_initWithImage: P0, _attributedString: P1, _spacing: P2): R;
    initWithImage_attributedString_spacing_isSimpleCandidate_isEmojiCandidate<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = boolean, P4 = boolean>(_initWithImage: P0, _attributedString: P1, _spacing: P2, _isSimpleCandidate: P3, _isEmojiCandidate: P4): R;
    spacing<R = number>(): R;
    attributedString<R = NSAttributedString>(): R;
    image<R = NSImage>(): R;
  }
  namespace NSCandidateBarCompositeCandidate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSCandidateBarCompositeCandidate>(): R;
      new: <R = NSCandidateBarCompositeCandidate>() => R;
    }
  }
}

declare const NSCandidateBarCompositeCandidate: cocoa.NSCandidateBarCompositeCandidate.CLASS;
