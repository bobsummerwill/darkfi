(function() {var implementors = {
"darkfi":[["impl <a class=\"trait\" href=\"halo2_proofs/circuit/trait.Chip.html\" title=\"trait halo2_proofs::circuit::Chip\">Chip</a>&lt;<a class=\"struct\" href=\"pasta_curves/fields/fp/struct.Fp.html\" title=\"struct pasta_curves::fields::fp::Fp\">Fp</a>&gt; for <a class=\"struct\" href=\"darkfi/zk/gadget/small_range_check/struct.SmallRangeCheckChip.html\" title=\"struct darkfi::zk::gadget::small_range_check::SmallRangeCheckChip\">SmallRangeCheckChip</a>"],["impl&lt;F: <a class=\"trait\" href=\"ff/trait.WithSmallOrderMulGroup.html\" title=\"trait ff::WithSmallOrderMulGroup\">WithSmallOrderMulGroup</a>&lt;3&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"halo2_proofs/circuit/trait.Chip.html\" title=\"trait halo2_proofs::circuit::Chip\">Chip</a>&lt;F&gt; for <a class=\"struct\" href=\"darkfi/zk/gadget/cond_select/struct.IsEqualChip.html\" title=\"struct darkfi::zk::gadget::cond_select::IsEqualChip\">IsEqualChip</a>&lt;F&gt;"],["impl&lt;F: <a class=\"trait\" href=\"ff/trait.WithSmallOrderMulGroup.html\" title=\"trait ff::WithSmallOrderMulGroup\">WithSmallOrderMulGroup</a>&lt;3&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"halo2_proofs/circuit/trait.Chip.html\" title=\"trait halo2_proofs::circuit::Chip\">Chip</a>&lt;F&gt; for <a class=\"struct\" href=\"darkfi/zk/gadget/arithmetic/struct.ArithChip.html\" title=\"struct darkfi::zk::gadget::arithmetic::ArithChip\">ArithChip</a>&lt;F&gt;"],["impl&lt;const WINDOW_SIZE: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.usize.html\">usize</a>, const NUM_BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.usize.html\">usize</a>, const NUM_WINDOWS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"halo2_proofs/circuit/trait.Chip.html\" title=\"trait halo2_proofs::circuit::Chip\">Chip</a>&lt;<a class=\"struct\" href=\"pasta_curves/fields/fp/struct.Fp.html\" title=\"struct pasta_curves::fields::fp::Fp\">Fp</a>&gt; for <a class=\"struct\" href=\"darkfi/zk/gadget/native_range_check/struct.NativeRangeCheckChip.html\" title=\"struct darkfi::zk::gadget::native_range_check::NativeRangeCheckChip\">NativeRangeCheckChip</a>&lt;WINDOW_SIZE, NUM_BITS, NUM_WINDOWS&gt;"],["impl&lt;const WINDOW_SIZE: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.usize.html\">usize</a>, const NUM_OF_BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.usize.html\">usize</a>, const NUM_OF_WINDOWS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"halo2_proofs/circuit/trait.Chip.html\" title=\"trait halo2_proofs::circuit::Chip\">Chip</a>&lt;<a class=\"struct\" href=\"pasta_curves/fields/fp/struct.Fp.html\" title=\"struct pasta_curves::fields::fp::Fp\">Fp</a>&gt; for <a class=\"struct\" href=\"darkfi/zk/gadget/less_than/struct.LessThanChip.html\" title=\"struct darkfi::zk::gadget::less_than::LessThanChip\">LessThanChip</a>&lt;WINDOW_SIZE, NUM_OF_BITS, NUM_OF_WINDOWS&gt;"],["impl&lt;F: <a class=\"trait\" href=\"ff/trait.WithSmallOrderMulGroup.html\" title=\"trait ff::WithSmallOrderMulGroup\">WithSmallOrderMulGroup</a>&lt;3&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"halo2_proofs/circuit/trait.Chip.html\" title=\"trait halo2_proofs::circuit::Chip\">Chip</a>&lt;F&gt; for <a class=\"struct\" href=\"darkfi/zk/gadget/cond_select/struct.ConditionalSelectChip.html\" title=\"struct darkfi::zk::gadget::cond_select::ConditionalSelectChip\">ConditionalSelectChip</a>&lt;F&gt;"],["impl&lt;F: <a class=\"trait\" href=\"ff/trait.WithSmallOrderMulGroup.html\" title=\"trait ff::WithSmallOrderMulGroup\">WithSmallOrderMulGroup</a>&lt;3&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"halo2_proofs/circuit/trait.Chip.html\" title=\"trait halo2_proofs::circuit::Chip\">Chip</a>&lt;F&gt; for <a class=\"struct\" href=\"darkfi/zk/gadget/cond_select/struct.AssertEqualChip.html\" title=\"struct darkfi::zk::gadget::cond_select::AssertEqualChip\">AssertEqualChip</a>&lt;F&gt;"]],
"halo2_gadgets":[["impl&lt;Hash, Commit, Fixed&gt; <a class=\"trait\" href=\"halo2_proofs/circuit/trait.Chip.html\" title=\"trait halo2_proofs::circuit::Chip\">Chip</a>&lt;<a class=\"struct\" href=\"pasta_curves/fields/fp/struct.Fp.html\" title=\"struct pasta_curves::fields::fp::Fp\">Fp</a>&gt; for <a class=\"struct\" href=\"halo2_gadgets/sinsemilla/chip/struct.SinsemillaChip.html\" title=\"struct halo2_gadgets::sinsemilla::chip::SinsemillaChip\">SinsemillaChip</a>&lt;Hash, Commit, Fixed&gt;<span class=\"where fmt-newline\">where\n    Hash: <a class=\"trait\" href=\"halo2_gadgets/sinsemilla/trait.HashDomains.html\" title=\"trait halo2_gadgets::sinsemilla::HashDomains\">HashDomains</a>&lt;<a class=\"type\" href=\"pasta_curves/pallas/type.Affine.html\" title=\"type pasta_curves::pallas::Affine\">Affine</a>&gt;,\n    Fixed: <a class=\"trait\" href=\"halo2_gadgets/ecc/trait.FixedPoints.html\" title=\"trait halo2_gadgets::ecc::FixedPoints\">FixedPoints</a>&lt;<a class=\"type\" href=\"pasta_curves/pallas/type.Affine.html\" title=\"type pasta_curves::pallas::Affine\">Affine</a>&gt;,\n    Commit: <a class=\"trait\" href=\"halo2_gadgets/sinsemilla/trait.CommitDomains.html\" title=\"trait halo2_gadgets::sinsemilla::CommitDomains\">CommitDomains</a>&lt;<a class=\"type\" href=\"pasta_curves/pallas/type.Affine.html\" title=\"type pasta_curves::pallas::Affine\">Affine</a>, Fixed, Hash&gt;,</span>"],["impl&lt;FixedPoints: <a class=\"trait\" href=\"halo2_gadgets/ecc/trait.FixedPoints.html\" title=\"trait halo2_gadgets::ecc::FixedPoints\">FixedPoints</a>&lt;<a class=\"type\" href=\"pasta_curves/pallas/type.Affine.html\" title=\"type pasta_curves::pallas::Affine\">Affine</a>&gt;&gt; <a class=\"trait\" href=\"halo2_proofs/circuit/trait.Chip.html\" title=\"trait halo2_proofs::circuit::Chip\">Chip</a>&lt;<a class=\"struct\" href=\"pasta_curves/fields/fp/struct.Fp.html\" title=\"struct pasta_curves::fields::fp::Fp\">Fp</a>&gt; for <a class=\"struct\" href=\"halo2_gadgets/ecc/chip/struct.EccChip.html\" title=\"struct halo2_gadgets::ecc::chip::EccChip\">EccChip</a>&lt;FixedPoints&gt;"],["impl&lt;F: <a class=\"trait\" href=\"ff/trait.Field.html\" title=\"trait ff::Field\">Field</a>, const WIDTH: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.usize.html\">usize</a>, const RATE: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"halo2_proofs/circuit/trait.Chip.html\" title=\"trait halo2_proofs::circuit::Chip\">Chip</a>&lt;F&gt; for <a class=\"struct\" href=\"halo2_gadgets/poseidon/struct.Pow5Chip.html\" title=\"struct halo2_gadgets::poseidon::Pow5Chip\">Pow5Chip</a>&lt;F, WIDTH, RATE&gt;"],["impl&lt;Hash, Commit, Fixed&gt; <a class=\"trait\" href=\"halo2_proofs/circuit/trait.Chip.html\" title=\"trait halo2_proofs::circuit::Chip\">Chip</a>&lt;<a class=\"struct\" href=\"pasta_curves/fields/fp/struct.Fp.html\" title=\"struct pasta_curves::fields::fp::Fp\">Fp</a>&gt; for <a class=\"struct\" href=\"halo2_gadgets/sinsemilla/merkle/chip/struct.MerkleChip.html\" title=\"struct halo2_gadgets::sinsemilla::merkle::chip::MerkleChip\">MerkleChip</a>&lt;Hash, Commit, Fixed&gt;<span class=\"where fmt-newline\">where\n    Hash: <a class=\"trait\" href=\"halo2_gadgets/sinsemilla/trait.HashDomains.html\" title=\"trait halo2_gadgets::sinsemilla::HashDomains\">HashDomains</a>&lt;<a class=\"type\" href=\"pasta_curves/pallas/type.Affine.html\" title=\"type pasta_curves::pallas::Affine\">Affine</a>&gt;,\n    Fixed: <a class=\"trait\" href=\"halo2_gadgets/ecc/trait.FixedPoints.html\" title=\"trait halo2_gadgets::ecc::FixedPoints\">FixedPoints</a>&lt;<a class=\"type\" href=\"pasta_curves/pallas/type.Affine.html\" title=\"type pasta_curves::pallas::Affine\">Affine</a>&gt;,\n    Commit: <a class=\"trait\" href=\"halo2_gadgets/sinsemilla/trait.CommitDomains.html\" title=\"trait halo2_gadgets::sinsemilla::CommitDomains\">CommitDomains</a>&lt;<a class=\"type\" href=\"pasta_curves/pallas/type.Affine.html\" title=\"type pasta_curves::pallas::Affine\">Affine</a>, Fixed, Hash&gt;,</span>"],["impl&lt;F: <a class=\"trait\" href=\"ff/trait.Field.html\" title=\"trait ff::Field\">Field</a>&gt; <a class=\"trait\" href=\"halo2_proofs/circuit/trait.Chip.html\" title=\"trait halo2_proofs::circuit::Chip\">Chip</a>&lt;F&gt; for <a class=\"struct\" href=\"halo2_gadgets/utilities/cond_swap/struct.CondSwapChip.html\" title=\"struct halo2_gadgets::utilities::cond_swap::CondSwapChip\">CondSwapChip</a>&lt;F&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()