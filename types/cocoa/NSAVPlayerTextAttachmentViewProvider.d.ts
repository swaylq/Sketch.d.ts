/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAVPlayerTextAttachmentViewProvider<T0 = void, T1 = void, T2 = void> extends NSTextAttachmentViewProvider {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    attachmentBoundsForTextContainer_proposedLineFragment_glyphPosition_characterIndex<R = CGRect, P0 = unknown, P1 = CGRect, P2 = CGPoint, P3 = number>(_attachmentBoundsForTextContainer: P0, _proposedLineFragment: P1, _glyphPosition: P2, _characterIndex: P3): R;
    loadView<R = void>(): R;
    dealloc<R = void>(): R;
    initWithTextAttachment_parentView_characterIndex_layoutManager<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(_initWithTextAttachment: P0, _parentView: P1, _characterIndex: P2, _layoutManager: P3): R;
    maximumHeight<R = number>(): R;
    setMaximumHeight<R = void, P0 = number>(_v: P0): R;
    avPlayer<R = AVPlayer>(): R;
    setAvPlayer<R = void, P0 = AVPlayer>(_v: P0): R;
    presentationSize<R = CGSize>(): R;
  }
  namespace NSAVPlayerTextAttachmentViewProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextAttachmentViewProvider {
      keyPathsForValuesAffectingPresentationSize<R = unknown>(): R;
      isPlayableFileType<R = boolean, P0 = unknown>(_isPlayableFileType: P0): R;
      pathExtensionForFileType<R = unknown, P0 = unknown>(_pathExtensionForFileType: P0): R;
      MIMETypeForFileType<R = unknown, P0 = unknown>(_MIMETypeForFileType: P0): R;
      _AVMovieClass<R = unknown>(): R;
      _AVPlayerViewClass<R = unknown>(): R;
      _AVPlayeItemrClass<R = unknown>(): R;
      _AVPlayerClass<R = unknown>(): R;
      _AVURLAssetClass<R = unknown>(): R;
      _loadAVKit<R = void>(): R;
    }
  }
}

declare const NSAVPlayerTextAttachmentViewProvider: cocoa.NSAVPlayerTextAttachmentViewProvider.CLASS;
