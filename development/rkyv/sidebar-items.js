window.SIDEBAR_ITEMS = {"derive":[["Archive","Derives `Archive` for the labeled type."],["CheckBytes","Derives `CheckBytes` for the labeled type."],["Deserialize","Derives `Deserialize` for the labeled type."],["Serialize","Derives `Serialize` for the labeled type."]],"fn":[["from_bytes","Checks and deserializes a value from the given bytes."]],"macro":[["from_archived","Returns the unarchived value of the given archived primitive."],["out_field","Returns a tuple of `(field_pos, field_out)`, where `field_pos` is the “position”, i.e. offset in bytes, of the field relative to the base address of the struct and `field_out` is a `*mut` that points to the field directly."],["to_archived","Returns the archived value of the given archived primitive."]],"mod":[["boxed","An archived version of `Box`."],["collections","Archived versions of standard library containers."],["de","Deserialization traits, deserializers, and adapters."],["ffi","Archived versions of FFI types."],["net","Archived versions of network types."],["niche","Manually niched type replacements."],["ops","Archived versions of `ops` types."],["option","An archived version of `Option`."],["rc","Archived versions of shared pointers."],["rel_ptr","Relative pointer implementations and options."],["result","An archived version of `Result`."],["ser","Serialization traits, serializers, and adapters."],["string","Archived versions of string types."],["time","Archived versions of `time` types."],["util","Utilities for common archive operations."],["validation","Validation implementations and helper types."],["vec","An archived version of `Vec`."],["with","Wrapper type support and commonly used wrappers."]],"struct":[["Infallible","A fallible type that cannot produce errors."]],"trait":[["Archive","A type that can be used without deserializing."],["ArchivePointee","An archived type with associated metadata for its relative pointer."],["ArchiveUnsized","A counterpart of [`Archive`] that’s suitable for unsized types."],["CheckBytes","A type that can check whether a pointer points to a valid value."],["Deserialize","Converts a type back from its archived form."],["DeserializeUnsized","A counterpart of [`Deserialize`] that’s suitable for unsized types."],["Fallible","A type that can produce an error."],["Serialize","Converts a type to its archived form."],["SerializeUnsized","A counterpart of [`Serialize`] that’s suitable for unsized types."]],"type":[["Archived","Alias for the archived version of some [`Archive`] type."],["ArchivedMetadata","Alias for the archived metadata for some [`ArchiveUnsized`] type."],["FixedIsize","The native type that `isize` is converted to for archiving."],["FixedUsize","The native type that `usize` is converted to for archiving."],["MetadataResolver","Alias for the metadata resolver for some [`ArchiveUnsized`] type."],["RawRelPtr","The default raw relative pointer."],["RelPtr","The default relative pointer."],["Resolver","Alias for the resolver for some [`Archive`] type."]]};