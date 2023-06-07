(function() {var implementors = {
"alsa":[["impl&lt;'a, S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"alsa/pcm/struct.IO.html\" title=\"struct alsa::pcm::IO\">IO</a>&lt;'a, S&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"alsa/rawmidi/struct.IO.html\" title=\"struct alsa::rawmidi::IO\">IO</a>&lt;'a&gt;"]],
"anstream":[["impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"anstream/struct.AutoStream.html\" title=\"struct anstream::AutoStream\">AutoStream</a>&lt;S&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"anstream/trait.RawStream.html\" title=\"trait anstream::RawStream\">RawStream</a>,</span>"],["impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"anstream/struct.StripStream.html\" title=\"struct anstream::StripStream\">StripStream</a>&lt;S&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"anstream/trait.RawStream.html\" title=\"trait anstream::RawStream\">RawStream</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"anstream/struct.Buffer.html\" title=\"struct anstream::Buffer\">Buffer</a>"]],
"arrayvec":[["impl&lt;const CAP: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"arrayvec/struct.ArrayVec.html\" title=\"struct arrayvec::ArrayVec\">ArrayVec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u8.html\">u8</a>, CAP&gt;"]],
"base64":[["impl&lt;'e, E: <a class=\"trait\" href=\"base64/engine/trait.Engine.html\" title=\"trait base64::engine::Engine\">Engine</a>, W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"base64/write/struct.EncoderWriter.html\" title=\"struct base64::write::EncoderWriter\">EncoderWriter</a>&lt;'e, E, W&gt;"],["impl&lt;'e, E: <a class=\"trait\" href=\"base64/engine/trait.Engine.html\" title=\"trait base64::engine::Engine\">Engine</a>, S: <a class=\"trait\" href=\"base64/write/trait.StrConsumer.html\" title=\"trait base64::write::StrConsumer\">StrConsumer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"base64/write/struct.EncoderStringWriter.html\" title=\"struct base64::write::EncoderStringWriter\">EncoderStringWriter</a>&lt;'e, E, S&gt;"]],
"bitvec":[["impl&lt;T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"bitvec/vec/struct.BitVec.html\" title=\"struct bitvec::vec::BitVec\">BitVec</a>&lt;T, O&gt;<span class=\"where fmt-newline\">where\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    <a class=\"struct\" href=\"bitvec/slice/struct.BitSlice.html\" title=\"struct bitvec::slice::BitSlice\">BitSlice</a>&lt;T, O&gt;: <a class=\"trait\" href=\"bitvec/field/trait.BitField.html\" title=\"trait bitvec::field::BitField\">BitField</a>,</span>"],["impl&lt;T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for &amp;mut <a class=\"struct\" href=\"bitvec/slice/struct.BitSlice.html\" title=\"struct bitvec::slice::BitSlice\">BitSlice</a>&lt;T, O&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,\n    <a class=\"struct\" href=\"bitvec/slice/struct.BitSlice.html\" title=\"struct bitvec::slice::BitSlice\">BitSlice</a>&lt;T, O&gt;: <a class=\"trait\" href=\"bitvec/field/trait.BitField.html\" title=\"trait bitvec::field::BitField\">BitField</a>,</span>"]],
"blake2b_simd":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"blake2b_simd/blake2bp/struct.State.html\" title=\"struct blake2b_simd::blake2bp::State\">State</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"blake2b_simd/struct.State.html\" title=\"struct blake2b_simd::State\">State</a>"]],
"blake3":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"blake3/struct.Hasher.html\" title=\"struct blake3::Hasher\">Hasher</a>"]],
"bytes":[["impl&lt;B: <a class=\"trait\" href=\"bytes/buf/trait.BufMut.html\" title=\"trait bytes::buf::BufMut\">BufMut</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"bytes/buf/struct.Writer.html\" title=\"struct bytes::buf::Writer\">Writer</a>&lt;B&gt;"]],
"console":[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for &amp;'a <a class=\"struct\" href=\"console/struct.Term.html\" title=\"struct console::Term\">Term</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"console/struct.Term.html\" title=\"struct console::Term\">Term</a>"]],
"digest":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"digest/core_api/struct.RtVariableCoreWrapper.html\" title=\"struct digest::core_api::RtVariableCoreWrapper\">RtVariableCoreWrapper</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"digest/core_api/trait.VariableOutputCore.html\" title=\"trait digest::core_api::VariableOutputCore\">VariableOutputCore</a> + <a class=\"trait\" href=\"digest/core_api/trait.UpdateCore.html\" title=\"trait digest::core_api::UpdateCore\">UpdateCore</a>,\n    T::<a class=\"associatedtype\" href=\"digest/core_api/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type digest::core_api::BlockSizeUser::BlockSize\">BlockSize</a>: <a class=\"trait\" href=\"typenum/type_operators/trait.IsLess.html\" title=\"trait typenum::type_operators::IsLess\">IsLess</a>&lt;<a class=\"type\" href=\"digest/consts/type.U256.html\" title=\"type digest::consts::U256\">U256</a>&gt;,\n    <a class=\"type\" href=\"typenum/operator_aliases/type.Le.html\" title=\"type typenum::operator_aliases::Le\">Le</a>&lt;T::<a class=\"associatedtype\" href=\"digest/core_api/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type digest::core_api::BlockSizeUser::BlockSize\">BlockSize</a>, <a class=\"type\" href=\"digest/consts/type.U256.html\" title=\"type digest::consts::U256\">U256</a>&gt;: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"digest/core_api/struct.CoreWrapper.html\" title=\"struct digest::core_api::CoreWrapper\">CoreWrapper</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a> + <a class=\"trait\" href=\"digest/core_api/trait.UpdateCore.html\" title=\"trait digest::core_api::UpdateCore\">UpdateCore</a>,\n    T::<a class=\"associatedtype\" href=\"digest/core_api/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type digest::core_api::BlockSizeUser::BlockSize\">BlockSize</a>: <a class=\"trait\" href=\"typenum/type_operators/trait.IsLess.html\" title=\"trait typenum::type_operators::IsLess\">IsLess</a>&lt;<a class=\"type\" href=\"digest/consts/type.U256.html\" title=\"type digest::consts::U256\">U256</a>&gt;,\n    <a class=\"type\" href=\"typenum/operator_aliases/type.Le.html\" title=\"type typenum::operator_aliases::Le\">Le</a>&lt;T::<a class=\"associatedtype\" href=\"digest/core_api/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type digest::core_api::BlockSizeUser::BlockSize\">BlockSize</a>, <a class=\"type\" href=\"digest/consts/type.U256.html\" title=\"type digest::consts::U256\">U256</a>&gt;: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,</span>"]],
"either":[["impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,</span>"]],
"futures_lite":[["impl&lt;T: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"futures_lite/io/struct.BlockOn.html\" title=\"struct futures_lite::io::BlockOn\">BlockOn</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"futures_lite/io/struct.AsyncAsSync.html\" title=\"struct futures_lite::io::AsyncAsSync\">AsyncAsSync</a>&lt;'_, '_, T&gt;"]],
"futures_util":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"futures_util/io/struct.AllowStdIo.html\" title=\"struct futures_util::io::AllowStdIo\">AllowStdIo</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,</span>"]],
"indicatif":[["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"indicatif/struct.ProgressBarIter.html\" title=\"struct indicatif::ProgressBarIter\">ProgressBarIter</a>&lt;W&gt;"]],
"mio":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"mio/net/struct.UnixStream.html\" title=\"struct mio::net::UnixStream\">UnixStream</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for &amp;'a <a class=\"struct\" href=\"mio/net/struct.TcpStream.html\" title=\"struct mio::net::TcpStream\">TcpStream</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"mio/unix/pipe/struct.Sender.html\" title=\"struct mio::unix::pipe::Sender\">Sender</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"mio/net/struct.TcpStream.html\" title=\"struct mio::net::TcpStream\">TcpStream</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for &amp;<a class=\"struct\" href=\"mio/unix/pipe/struct.Sender.html\" title=\"struct mio::unix::pipe::Sender\">Sender</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for &amp;'a <a class=\"struct\" href=\"mio/net/struct.UnixStream.html\" title=\"struct mio::net::UnixStream\">UnixStream</a>"]],
"rkyv":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"rkyv/util/struct.AlignedVec.html\" title=\"struct rkyv::util::AlignedVec\">AlignedVec</a>"]],
"rustls":[["impl&lt;'a, C, T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"rustls/struct.Stream.html\" title=\"struct rustls::Stream\">Stream</a>&lt;'a, C, T&gt;<span class=\"where fmt-newline\">where\n    C: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a>&lt;Target = <a class=\"struct\" href=\"rustls/struct.ConnectionCommon.html\" title=\"struct rustls::ConnectionCommon\">ConnectionCommon</a>&lt;S&gt;&gt;,\n    T: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,\n    S: <a class=\"trait\" href=\"rustls/trait.SideData.html\" title=\"trait rustls::SideData\">SideData</a>,</span>"],["impl&lt;C, T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"rustls/struct.StreamOwned.html\" title=\"struct rustls::StreamOwned\">StreamOwned</a>&lt;C, T&gt;<span class=\"where fmt-newline\">where\n    C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a>&lt;Target = <a class=\"struct\" href=\"rustls/struct.ConnectionCommon.html\" title=\"struct rustls::ConnectionCommon\">ConnectionCommon</a>&lt;S&gt;&gt;,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,\n    S: <a class=\"trait\" href=\"rustls/trait.SideData.html\" title=\"trait rustls::SideData\">SideData</a>,</span>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"rustls/struct.Writer.html\" title=\"struct rustls::Writer\">Writer</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"rustls/client/struct.WriteEarlyData.html\" title=\"struct rustls::client::WriteEarlyData\">WriteEarlyData</a>&lt;'a&gt;"]],
"socket2":[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for &amp;'a <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>"]],
"term":[["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"term/terminfo/struct.TerminfoTerminal.html\" title=\"struct term::terminfo::TerminfoTerminal\">TerminfoTerminal</a>&lt;T&gt;"]],
"termcolor":[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"termcolor/struct.StandardStreamLock.html\" title=\"struct termcolor::StandardStreamLock\">StandardStreamLock</a>&lt;'a&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"termcolor/struct.BufferedStandardStream.html\" title=\"struct termcolor::BufferedStandardStream\">BufferedStandardStream</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"termcolor/struct.Buffer.html\" title=\"struct termcolor::Buffer\">Buffer</a>"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"termcolor/struct.Ansi.html\" title=\"struct termcolor::Ansi\">Ansi</a>&lt;W&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"termcolor/struct.StandardStream.html\" title=\"struct termcolor::StandardStream\">StandardStream</a>"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"termcolor/struct.NoColor.html\" title=\"struct termcolor::NoColor\">NoColor</a>&lt;W&gt;"]],
"termion":[["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"termion/raw/struct.RawTerminal.html\" title=\"struct termion::raw::RawTerminal\">RawTerminal</a>&lt;W&gt;"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"termion/cursor/struct.HideCursor.html\" title=\"struct termion::cursor::HideCursor\">HideCursor</a>&lt;W&gt;"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"termion/screen/struct.AlternateScreen.html\" title=\"struct termion::screen::AlternateScreen\">AlternateScreen</a>&lt;W&gt;"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"termion/input/struct.MouseTerminal.html\" title=\"struct termion::input::MouseTerminal\">MouseTerminal</a>&lt;W&gt;"]],
"tui":[["impl&lt;W&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"tui/backend/struct.TermionBackend.html\" title=\"struct tui::backend::TermionBackend\">TermionBackend</a>&lt;W&gt;<span class=\"where fmt-newline\">where\n    W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,</span>"],["impl&lt;W&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"tui/backend/struct.CrosstermBackend.html\" title=\"struct tui::backend::CrosstermBackend\">CrosstermBackend</a>&lt;W&gt;<span class=\"where fmt-newline\">where\n    W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,</span>"]],
"tungstenite":[["impl&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"enum\" href=\"tungstenite/stream/enum.MaybeTlsStream.html\" title=\"enum tungstenite::stream::MaybeTlsStream\">MaybeTlsStream</a>&lt;S&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()