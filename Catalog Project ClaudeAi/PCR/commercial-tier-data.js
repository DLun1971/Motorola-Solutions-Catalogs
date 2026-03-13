const RADIOS_DATA = {

  // ── R2 PORTABLE ────────────────────────────────────────────────────────────
  'r2': {
    name: 'MOTOTRBO R2',
    sub: 'Digital/Analog Portable — Entry Commercial',
    tags: ['Digital/Analog', 'IP55', 'Windporting', 'Range Max'],
    tagStyles: ['', 'green', 'orange', ''],
    categories: {
      rsm: {
        label: 'Remote Speaker Mics',
        icon: '',
        sections: [
          {
            title: 'Windporting RSMs',
            items: [
              { pn: 'PMMN4148', desc: 'RM110 Remote Speaker Microphone with 3.5mm Audio Jack (IP55)', badges: ['WINDPORT','IP55'], note: 'Small, 59×76×22mm' },
              { pn: 'PMMN4149', desc: 'RM110 Remote Speaker Microphone without 3.5mm Audio Jack (IP55)', badges: ['WINDPORT','IP55'], note: 'Small, 59×76×22mm — not available in EMEA' },
              { pn: 'PMMN4029', desc: 'Windporting RSM, Submersible (IP57)', badges: ['WINDPORT','IP57'], note: 'Small, 55×60×27mm' },
              { pn: 'PMMN4013', desc: 'Windporting RSM with 3.5mm Audio Jack (IP54)', badges: ['WINDPORT','IP54'], note: 'Small, 55×60×27mm' },
            ]
          },
          {
            title: 'RSM Replacement Accessories',
            items: [
              { pn: 'PMLN8121', desc: 'Low Profile Swivel Clip', note: 'For PMMN4148 / PMMN4149' },
              { pn: 'PMLN8253', desc: 'Replacement Dust Cover for PMMN4148/4149 (Pack of 10)', note: '' },
              { pn: 'PMKN4155', desc: 'Replacement RSM Cable', note: 'For PMMN4013 / PMMN4029' },
            ]
          },
          {
            title: 'RSM Earpiece Accessories (3.5mm Standard Jack)',
            items: [
              { pn: 'PMLN8120', desc: 'Receive-Only XL Clear Tube Earpiece, 3.5mm Jack', note: 'R2 only' },
              { pn: 'AARLN4885', desc: 'Receive-Only Foam Covered Earbud with Coiled Cord (3.5mm)', note: '' },
              { pn: 'RLN4941',  desc: 'Receive-Only Earpiece with Translucent Tube and Rubber Eartip (3.5mm)', note: '' },
              { pn: 'PMLN4620', desc: 'Receive-Only D-Shell Earpiece (3.5mm)', note: '' },
              { pn: 'WADN4190', desc: 'Receive-Only Flexible Earpiece (3.5mm)', note: '' },
            ]
          },
        ]
      },
      surveillance: {
        cols: ["Part Number", "Description", "Wires", "PTT", "Tube", "VOX", "Noise Cancel"],
        label: 'Surveillance & Earpieces',
        icon: '',
        sections: [
          {
            title: 'Surveillance Kits',
            items: [
              { pn: 'PMLN6530', desc: '2-Wire Surveillance Kit with Translucent Tube, Black', note: '', checks: {wires: "2", ptt: 0, tube: 1, vox: 0, nc: 0} },
              { pn: 'PMLN6445', desc: '2-Wire Surveillance Kit with Translucent Tube, Beige', note: '', checks: {wires: "2", ptt: 0, tube: 1, vox: 0, nc: 0} },
            ]
          },
          {
            title: 'Surveillance Replacement Kits',
            items: [
              { pn: 'RLN6242',     desc: 'Quick Disconnect Low Noise Kit with Translucent Tube and 1 Clear Rubber Eartip', note: '' },
              { pn: '5080370E97',  desc: 'Replacement Standard Clear Rubber Eartip for RLN6242 (Pack of 25)', note: '' },
              { pn: '5080384F72',  desc: 'Replacement Foam Plugs for RLN6242, NRR 24dB (Pack of 50 pairs)', note: '' },
              { pn: 'RLN6282',     desc: 'Replacement Standard Clear Rubber Eartip, Pack of 50', note: '' },
              { pn: 'RLN4760',     desc: 'Small Custom Earpiece, Right Ear', note: '' },
              { pn: 'RLN4761',     desc: 'Medium Custom Earpiece, Right Ear', note: '' },
              { pn: 'RLN4762',     desc: 'Large Custom Earpiece, Right Ear', note: '' },
              { pn: 'RLN4763',     desc: 'Small Custom Earpiece, Left Ear', note: '' },
              { pn: 'RLN4764',     desc: 'Medium Custom Earpiece, Left Ear', note: '' },
              { pn: 'RLN4765',     desc: 'Large Custom Earpiece, Left Ear', note: '' },
            ]
          },
          {
            title: 'Earpieces & Mag One™ Accessories',
            items: [
              { pn: 'PMLN6533', desc: 'Earbud with Combined Microphone and PTT', note: '', checks: {wires: "\u2014", ptt: 1, tube: 0, vox: 0, nc: 0} },
              { pn: 'PMLN6535', desc: 'D-Style Earpiece with Microphone and PTT', note: '', checks: {wires: "\u2014", ptt: 1, tube: 0, vox: 0, nc: 0} },
              { pn: 'PMLN6532', desc: 'Mag One Swivel Earpiece with In-line Mic and PTT', note: '', checks: {wires: "\u2014", ptt: 1, tube: 0, vox: 0, nc: 0} },
              { pn: 'PMLN6534', desc: 'Mag One Earbud with In-line Mic, PTT and VOX Switch', note: '', checks: {wires: "\u2014", ptt: 1, tube: 0, vox: 1, nc: 0} },
              { pn: 'PMLN6531', desc: 'Mag One Ear Receiver with In-line Mic, PTT and VOX Switch', note: '', checks: {wires: "\u2014", ptt: 1, tube: 0, vox: 1, nc: 0} },
            ]
          },
        ]
      },
      headsets: {
        cols: ["Part Number", "Description", "Noise Cancel", "NRR", "PTT", "VOX", "Bone Cond.", "Hard Hat"],
        label: 'Headsets',
        icon: '',
        sections: [
          {
            title: 'Heavy-Duty Headsets',
            items: [
              { pn: 'PMLN7468', desc: 'Heavy-Duty Over-the-Head Dual Muff, Noise-Canceling Boom Mic, 24dB NRR', note: 'No PTT (use radio PTT) — use with retainer kit PMLN8502; not available in EMEA', checks: {nc: 1, nrr: "24dB", ptt: 1, vox: 0, bone: 0, hh: 0} },
              { pn: 'PMLN6854', desc: 'Heavy-Duty Behind-the-Head Dual Muff (Hard Hat Compatible), Noise-Canceling Boom Mic, In-line PTT, 24dB NRR', note: 'Use with retainer kit PMLN8502', checks: {nc: 1, nrr: "24dB", ptt: 1, vox: 0, bone: 0, hh: 1} },
            ]
          },
          {
            title: 'Lightweight Headsets',
            items: [
              { pn: 'PMLN6538', desc: 'Lightweight Over-the-Head Single Muff, Swivel Boom Mic, In-line PTT', note: '', checks: {nc: 0, nrr: "\u2014", ptt: 1, vox: 0, bone: 0, hh: 0} },
              { pn: 'PMLN6542', desc: 'Mag One Ultra-Lite Behind-the-Head, Adjustable, Boom Mic, In-line PTT and VOX', note: '', checks: {nc: 0, nrr: "\u2014", ptt: 1, vox: 1, bone: 0, hh: 0} },
            ]
          },
          {
            title: 'Headset Replacement Parts',
            items: [
              { pn: 'AY000308A01', desc: 'Replacement Cable for Heavy-Duty Headsets', note: 'For PMLN6854 / PMLN7468', checks: {nc: 0, nrr: "\u2014", ptt: 0, vox: 0, bone: 0, hh: 0} },
              { pn: 'AY000310A01', desc: 'Microphone Windscreen with Retaining O-Ring (Qty 5)', note: '', checks: {nc: 0, nrr: "\u2014", ptt: 0, vox: 0, bone: 0, hh: 0} },
              { pn: 'AY000311A01', desc: 'Gel Ear Seal with Mesh and O-Ring (Qty 2)', note: '', checks: {nc: 0, nrr: "\u2014", ptt: 0, vox: 0, bone: 0, hh: 0} },
              { pn: 'AY000312A01', desc: 'Headset Left Microphone Boom Assembly', note: '', checks: {nc: 0, nrr: "\u2014", ptt: 0, vox: 0, bone: 0, hh: 0} },
              { pn: 'AY000313A01', desc: 'Headset Ring Microphone Boom Assembly', note: '', checks: {nc: 0, nrr: "\u2014", ptt: 0, vox: 0, bone: 0, hh: 0} },
              { pn: 'REX4648',     desc: 'Kit with Foam Earpad and Microphone Cover', note: 'For PMLN6538' },
              { pn: 'PMLN8502',    desc: 'Retainer Kit — additional protection when securing accessories to R2', note: 'Required for PMLN7468 and PMLN6854; also compatible with most RSMs and surveillance kits' },
            ]
          },
          {
            title: 'Hearing Protector Earplugs (for Heavy-Duty Headsets)',
            items: [
              { pn: 'RLN6511', desc: 'Clear EP7-Small Sonic Defenders Ultra Earplugs, NRR 28dB', note: '', checks: {nc: 0, nrr: "\u2014", ptt: 0, vox: 0, bone: 0, hh: 0} },
              { pn: 'RLN6512', desc: 'Clear EP7-Medium Sonic Defenders Ultra Earplugs, NRR 28dB', note: '', checks: {nc: 0, nrr: "\u2014", ptt: 0, vox: 0, bone: 0, hh: 0} },
              { pn: 'RLN6513', desc: 'Clear EP7-Large Sonic Defenders Ultra Earplugs, NRR 28dB', note: '', checks: {nc: 0, nrr: "\u2014", ptt: 0, vox: 0, bone: 0, hh: 0} },
            ]
          },
        ]
      },
      batteries: {
        label: 'Batteries',
        icon: '',
        sections: [
          {
            title: 'R2 Batteries',
            items: [
              { pn: 'PMNN4600', desc: 'Slim Li-Ion 2100mAh Battery (CE)', badges: ['IP55'], note: '54×122×18mm, 120g, -20°C to +60°C' },
              { pn: 'PMNN4598', desc: 'Li-Ion 2300mAh Battery (CE)', badges: ['IP55'], note: '54×122×23mm, 140g, -20°C to +60°C' },
            ]
          },
        ]
      },
      chargers: {
        label: 'Chargers',
        icon: '',
        sections: [
          {
            title: 'Single-Unit Chargers',
            items: [
              { pn: 'WPLN4138',   desc: 'Rapid-Rate Desktop Charger, 120V US', note: 'Li-Ion, NiMH — 1-pocket' },
              { pn: 'PMLN5193',   desc: 'Rapid-Rate Charger with Switch Mode Power Supply, 120V US', note: 'Li-Ion, NiMH — international variants: PMLN5189-5192, PMLN5204, WPLN4139/4147/4280, PMKTN4096' },
              { pn: 'PMLN7089',   desc: 'Travel Charger with Vehicular Adapter, Mounting Bracket, and Coil Cord', note: 'Cigarette lighter adapter — US only, not certified internationally' },
            ]
          },
          {
            title: 'Multi-Unit Chargers',
            items: [
              { pn: 'PMLN6588',   desc: 'Universal 6-Pocket Multi-Unit Charger, 120V US', note: 'Li-Ion, NiMH, 100-240V — international variants: PMLN6589-6601' },
            ]
          },
          {
            title: 'Charger Replacement Parts',
            items: [
              { pn: '25009297001', desc: 'Replacement Power Supply Unit for Rapid-Rate Desktop Charger, US', note: 'International variants available' },
              { pn: '3004209T04',  desc: 'Power Cord for Multi-Unit Charger, US', note: 'International variants: 3004209T01, T02, T07-T16' },
            ]
          },
        ]
      },
      carry: {
        label: 'Carry Solutions',
        icon: '',
        sections: [
          {
            title: 'Cases & Clips',
            items: [
              { pn: 'PMLN8427', desc: 'Nylon Case with 3-inch Fixed Belt Loop and D-Ring', note: 'Non-display' },
              { pn: 'PMLN8433', desc: 'Hard Leather Case with 3-inch Fixed Belt Loop and D-Rings', note: 'Non-display' },
              { pn: 'PMLN8434', desc: 'Hard Leather Case with 2.5-inch Swivel Belt Loop and D-Rings', note: 'Non-display' },
              { pn: 'PMLN8435', desc: 'Hard Leather Case with 3-inch Swivel Belt Loop and D-Rings', note: 'Non-display' },
              { pn: 'PMLN5610', desc: 'Replacement 2.5-inch Swivel Belt Loop', note: '' },
              { pn: 'PMLN5611', desc: 'Replacement 3-inch Swivel Belt Loop', note: '' },
              { pn: 'HLN9844',  desc: 'Spring Action 2-inch Belt Clip', note: '' },
              { pn: 'HLN9714',  desc: 'Spring Action 2.5-inch Belt Clip', note: '' },
              { pn: 'PMLN4651', desc: '2-inch Belt Clip', note: '' },
              { pn: 'PMLN7008', desc: '2.5-inch Belt Clip', note: '' },
            ]
          },
          {
            title: 'Straps & Packs',
            items: [
              { pn: 'NTN5243',  desc: 'Adjustable Nylon Carrying Strap', note: '' },
              { pn: 'HLN6602',  desc: 'Universal Chest Pack with Radio Holder, Pen Holder, and Velcro Pouch', note: '' },
              { pn: 'HLN9985',  desc: 'Waterproof Bag with Large Strap', note: '' },
            ]
          },
        ]
      },
      cables: {
        label: 'Programming Cables',
        icon: '',
        sections: [
          {
            title: 'Programming & Test Cables',
            items: [
              { pn: 'PMKN4128', desc: 'Portable Programming USB Cable', note: 'For R2 and CP200d' },
            ]
          },
        ]
      },
      antennas: {
        label: 'Antennas',
        icon: '',
        sections: [
          {
            title: 'UHF Antennas',
            items: [
              { pn: 'PMAE4069', desc: 'UHF/GPS Combination Stubby Antenna, 400-450 MHz, 9cm', note: '' },
              { pn: 'PMAE4070', desc: 'UHF/GPS Combination Stubby Antenna, 440-490 MHz, 9cm', note: '' },
              { pn: 'PMAE4071', desc: 'UHF Stubby Antenna, 470-527 MHz, 9cm', note: '' },
              { pn: 'PMAE4079', desc: 'UHF/GPS Combination Wideband Slim Whip Antenna, 400-527 MHz, 15cm', note: '' },
            ]
          },
          {
            title: 'VHF Antennas',
            items: [
              { pn: 'PMAD4117', desc: 'VHF/GPS Combination Helical Antenna, 136-155 MHz, 15cm', note: '' },
              { pn: 'PMAD4116', desc: 'VHF/GPS Combination Helical Antenna, 144-165 MHz, 15cm', note: '' },
              { pn: 'PMAD4118', desc: 'VHF/GPS Combination Helical Antenna, 152-174 MHz, 15cm', note: '' },
              { pn: 'PMAD4147', desc: 'VHF/GPS Combination Wideband Slim Whip Antenna, 136-174 MHz, 20cm', note: '' },
              { pn: 'PMAD4119', desc: 'VHF/GPS Combination Stubby Antenna, 136-148 MHz, 9cm', note: '' },
              { pn: 'PMAD4120', desc: 'VHF/GPS Combination Stubby Antenna, 146-160 MHz, 9cm', note: '' },
              { pn: 'PMAD4121', desc: 'VHF Stubby Antenna, 160-174 MHz, 9cm', note: '' },
              { pn: 'PMAD4133', desc: 'Stubby Antenna, 360-400 MHz, 9cm', note: '350 MHz band' },
              { pn: 'PMAD4136', desc: 'Stubby Antenna, 350-380 MHz, 9cm', note: '350 MHz band' },
              { pn: 'PMAD4139', desc: 'VHF Whip Antenna, 350-400 MHz, 16cm', note: '350 MHz band' },
            ]
          },
        ]
      },
    }
  },

  // ── CP200d PORTABLE ────────────────────────────────────────────────────────
  'cp200d': {
    name: 'CP200d',
    sub: 'Digital/Analog Portable — Compact Commercial',
    tags: ['Digital/Analog', 'IP54', 'Windporting', 'IMPRES Compatible'],
    tagStyles: ['', 'green', 'orange', ''],
    categories: {
      rsm: {
        label: 'Remote Speaker Mics',
        icon: '',
        sections: [
          {
            title: 'Windporting RSMs',
            items: [
              { pn: 'PMMN4029', desc: 'Windporting RSM, Submersible (IP57)', badges: ['WINDPORT','IP57'], note: 'Small, 55×60×27mm' },
              { pn: 'PMMN4013', desc: 'Windporting RSM with 3.5mm Audio Jack (IP54)', badges: ['WINDPORT','IP54'], note: 'Small, 55×60×27mm' },
              { pn: 'PMMN4092', desc: 'Mag One Remote Speaker Microphone', note: 'Small, 49×72×23mm' },
            ]
          },
          {
            title: 'RSM Replacement Accessories',
            items: [
              { pn: 'PMKN4155', desc: 'Replacement RSM Cable', note: 'For PMMN4013 / PMMN4029' },
            ]
          },
          {
            title: 'RSM Earpiece Accessories (3.5mm Standard Jack)',
            items: [
              { pn: 'AARLN4885',  desc: 'Receive-Only Foam Covered Earbud with Coiled Cord (3.5mm)', note: '' },
              { pn: 'RLN4941',   desc: 'Receive-Only Earpiece with Translucent Tube and Rubber Eartip (3.5mm)', note: '' },
              { pn: 'PMLN4620',  desc: 'Receive-Only D-Shell Earpiece (3.5mm)', note: '' },
              { pn: 'WADN4190',  desc: 'Receive-Only Flexible Earpiece (3.5mm)', note: '' },
              { pn: 'PMLN7560',  desc: 'Receive-Only Earpiece with Translucent Tube and Rubber Eartip (3.5mm)', note: '' },
              { pn: 'PMLN7396',  desc: 'Receive-Only Adjustable D-Style with Standard 3.5mm Jack', note: '' },
            ]
          },
        ]
      },
      surveillance: {
        cols: ["Part Number", "Description", "Wires", "PTT", "Tube", "VOX", "Noise Cancel"],
        label: 'Surveillance & Earpieces',
        icon: '',
        sections: [
          {
            title: 'Surveillance Kits',
            items: [
              { pn: 'PMLN6536', desc: '2-Wire Surveillance Kit with Quick Disconnect Translucent Tube, Black', note: '', checks: {wires: "2", ptt: 0, tube: 1, vox: 0, nc: 0} },
              { pn: 'PMLN6530', desc: '2-Wire Surveillance Kit with Translucent Tube, Black', note: '', checks: {wires: "2", ptt: 0, tube: 1, vox: 0, nc: 0} },
              { pn: 'PMLN6445', desc: '2-Wire Surveillance Kit with Translucent Tube, Beige', note: '', checks: {wires: "2", ptt: 0, tube: 1, vox: 0, nc: 0} },
            ]
          },
          {
            title: 'Surveillance Replacement Kits',
            items: [
              { pn: 'RLN6242',     desc: 'Quick Disconnect Low Noise Kit with Translucent Tube and Clear Rubber Eartip', note: '' },
              { pn: '5080370E97',  desc: 'Replacement Standard Clear Rubber Eartip for RLN6242 (Pack of 25)', note: '' },
              { pn: '5080384F72',  desc: 'Replacement Foam Plugs for RLN6242, NRR 24dB (Pack of 50 pairs)', note: '' },
              { pn: 'RLN6282',     desc: 'Replacement Standard Clear Rubber Eartip, Pack of 50', note: '' },
              { pn: 'RLN6230',     desc: 'Extreme Noise Kit with 2 Foam Earplugs, Black Clip (for PMLN6536)', note: '' },
              { pn: '67009254001', desc: 'Replacement Standard Clear Rubber Eartip for PMLN6530/6445 (Pack of 10)', note: '', checks: {wires: "\u2014", ptt: 0, tube: 0, vox: 0, nc: 0} },
              { pn: 'RLN4760',     desc: 'Small Custom Earpiece, Right Ear', note: '' },
              { pn: 'RLN4761',     desc: 'Medium Custom Earpiece, Right Ear', note: '' },
              { pn: 'RLN4762',     desc: 'Large Custom Earpiece, Right Ear', note: '' },
              { pn: 'RLN4763',     desc: 'Small Custom Earpiece, Left Ear', note: '' },
              { pn: 'RLN4764',     desc: 'Medium Custom Earpiece, Left Ear', note: '' },
              { pn: 'RLN4765',     desc: 'Large Custom Earpiece, Left Ear', note: '' },
              { pn: 'RLN6511',     desc: 'Clear EP7-Small Sonic Defenders Ultra Earplugs, NRR 28dB', note: '' },
              { pn: 'RLN6512',     desc: 'Clear EP7-Medium Sonic Defenders Ultra Earplugs, NRR 28dB', note: '' },
              { pn: 'RLN6513',     desc: 'Clear EP7-Large Sonic Defenders Ultra Earplugs, NRR 28dB', note: '' },
            ]
          },
          {
            title: 'Earpieces & Mag One™ Accessories',
            items: [
              { pn: 'PMLN6533', desc: 'Earbud with Combined Microphone and PTT', note: '', checks: {wires: "\u2014", ptt: 1, tube: 0, vox: 0, nc: 0} },
              { pn: 'PMLN6535', desc: 'D-Style Earpiece with Microphone and PTT', note: '', checks: {wires: "\u2014", ptt: 1, tube: 0, vox: 0, nc: 0} },
              { pn: 'PMLN6532', desc: 'Mag One Swivel Earpiece with In-line Mic and PTT', note: '', checks: {wires: "\u2014", ptt: 1, tube: 0, vox: 0, nc: 0} },
              { pn: 'PMLN6534', desc: 'Mag One Earbud with In-line Mic, PTT and VOX Switch', note: '', checks: {wires: "\u2014", ptt: 1, tube: 0, vox: 1, nc: 0} },
              { pn: 'PMLN6531', desc: 'Mag One Ear Receiver with In-line Mic, PTT and VOX Switch', note: '', checks: {wires: "\u2014", ptt: 1, tube: 0, vox: 1, nc: 0} },
              { pn: 'PMLN6537', desc: 'Mag One Earset with Boom Microphone and In-line PTT and VOX', note: '', checks: {wires: "\u2014", ptt: 1, tube: 0, vox: 1, nc: 0} },
            ]
          },
        ]
      },
      headsets: {
        cols: ["Part Number", "Description", "Noise Cancel", "NRR", "PTT", "VOX", "Bone Cond.", "Hard Hat"],
        label: 'Headsets',
        icon: '',
        sections: [
          {
            title: 'Heavy-Duty Headsets',
            items: [
              { pn: 'PMLN7468', desc: 'Heavy-Duty Over-the-Head Dual Muff, Noise-Canceling Boom Mic, 24dB NRR', note: 'No PTT (use radio PTT) — not available in EMEA', checks: {nc: 1, nrr: "24dB", ptt: 1, vox: 0, bone: 0, hh: 0} },
              { pn: 'PMLN6854', desc: 'Heavy-Duty Behind-the-Head Dual Muff (Hard Hat Compatible), NC Boom Mic, In-line PTT, 24dB NRR', note: '', checks: {nc: 0, nrr: "24dB", ptt: 1, vox: 0, bone: 0, hh: 1} },
            ]
          },
          {
            title: 'Lightweight Headsets',
            items: [
              { pn: 'PMLN6538', desc: 'Lightweight Over-the-Head Single Muff, Swivel Boom Mic, In-line PTT', note: '', checks: {nc: 0, nrr: "\u2014", ptt: 1, vox: 0, bone: 0, hh: 0} },
              { pn: 'PMLN6542', desc: 'Mag One Ultra-Lite Behind-the-Head, Adjustable, Boom Mic, In-line PTT and VOX', note: '', checks: {nc: 0, nrr: "\u2014", ptt: 1, vox: 1, bone: 0, hh: 0} },
              { pn: 'PMLN6541', desc: 'Lightweight Temple Transducer Headset with In-line Mic and PTT', note: 'Bone conduction', checks: {nc: 0, nrr: "\u2014", ptt: 1, vox: 0, bone: 1, hh: 0} },
            ]
          },
          {
            title: 'Headset Replacement Parts',
            items: [
              { pn: '75012068001', desc: 'Foam Ear Seal', note: 'For PMLN6854', checks: {nc: 0, nrr: "\u2014", ptt: 0, vox: 0, bone: 0, hh: 0} },
              { pn: '15012094001', desc: 'Cloth Covers', note: 'For PMLN6854', checks: {nc: 0, nrr: "\u2014", ptt: 0, vox: 0, bone: 0, hh: 0} },
              { pn: '4204004K01',  desc: 'Over-the-Head Strap', note: 'For PMLN6854' },
              { pn: '3578010A01',  desc: 'Headset Windscreen', note: 'For PMLN6854' },
              { pn: 'REX4648',     desc: 'Kit with Foam Earpad and Microphone Cover', note: 'For PMLN6538' },
              { pn: 'AY000308A01', desc: 'Replacement Cable', note: 'For PMLN6854 / PMLN7468', checks: {nc: 0, nrr: "\u2014", ptt: 0, vox: 0, bone: 0, hh: 0} },
              { pn: 'AY000310A01', desc: 'Microphone Windscreen with Retaining O-Ring (Qty 5)', note: '', checks: {nc: 0, nrr: "\u2014", ptt: 0, vox: 0, bone: 0, hh: 0} },
              { pn: 'AY000311A01', desc: 'Gel Ear Seal with Mesh and O-Ring (Qty 2)', note: '', checks: {nc: 0, nrr: "\u2014", ptt: 0, vox: 0, bone: 0, hh: 0} },
              { pn: 'RLN6511',     desc: 'Clear EP7-Small Sonic Defenders Ultra Earplugs, NRR 28dB', note: '' },
              { pn: 'RLN6512',     desc: 'Clear EP7-Medium Sonic Defenders Ultra Earplugs, NRR 28dB', note: '' },
              { pn: 'RLN6513',     desc: 'Clear EP7-Large Sonic Defenders Ultra Earplugs, NRR 28dB', note: '' },
            ]
          },
        ]
      },
      batteries: {
        label: 'Batteries',
        icon: '',
        sections: [
          {
            title: 'CP200d Batteries',
            items: [
              { pn: 'NNTN4851',  desc: 'NiMH 1400mAh Battery', badges: ['IP54'], note: '60×120×21mm, 210g, -20°C to +60°C' },
              { pn: 'NNTN4970',  desc: 'Slim Li-Ion 1700mAh Battery', badges: ['IP54'], note: '60×120×18mm, 147g, -10°C to +60°C' },
              { pn: 'NNTN4497',  desc: 'Li-Ion 2250mAh Battery', badges: ['IP54'], note: '60×120×24mm, 140g, -10°C to +60°C' },
              { pn: 'PMNN4458',  desc: 'Mag One Li-Ion 2150mAh Battery', badges: ['IP54'], note: '60×120×24mm, 140g, -10°C to +60°C' },
              { pn: 'PMNN4251',  desc: 'NiMH 1400mAh Battery (CE)', badges: ['IP54'], note: '60×120×21mm, 210g, -20°C to +60°C' },
            ]
          },
        ]
      },
      chargers: {
        label: 'Chargers',
        icon: '',
        sections: [
          {
            title: 'Single-Unit Chargers',
            items: [
              { pn: 'WPLN4138',  desc: 'Rapid-Rate Desktop Charger, 120V US', note: '1-pocket, Li-Ion, NiMH' },
              { pn: 'PMLN5193',  desc: 'Rapid-Rate Charger with Switch Mode Power Supply, 100-240V', note: '1-pocket — international variants: PMLN5189-5204, WPLN4139/4147/4280, PMKTN4096' },
              { pn: 'PMLN7089',  desc: 'Travel Charger with Vehicular Adapter and Mounting Bracket', note: 'Cigarette lighter — US only' },
            ]
          },
          {
            title: 'Multi-Unit Chargers',
            items: [
              { pn: 'PMLN6588', desc: 'Universal 6-Pocket Multi-Unit Charger, 100-240V, US', note: 'International variants: PMLN6589-6601' },
            ]
          },
        ]
      },
      carry: {
        label: 'Carry Solutions',
        icon: '',
        sections: [
          {
            title: 'Cases',
            items: [
              { pn: 'HLN9701',  desc: 'Nylon Case with 3-inch Fixed Belt Loop and D-Rings (Non-Display)', note: '' },
              { pn: 'RLN5383',  desc: 'Hard Leather Case with 3-inch Fixed Belt Loop (Non-Display)', note: '' },
              { pn: 'RLN5384',  desc: 'Hard Leather Case with 2.5-inch Swivel Belt Loop (Non-Display)', note: '' },
              { pn: 'RLN5385',  desc: 'Hard Leather Case with 3-inch Swivel Belt Loop (Non-Display)', note: '' },
            ]
          },
          {
            title: 'Clips & Straps',
            items: [
              { pn: 'RLN5644',     desc: 'Spring Action 2-inch Belt Clip', note: '' },
              { pn: 'HLN8255',     desc: 'Spring Action 3-inch Belt Clip', note: '' },
              { pn: 'HLN9844',     desc: 'Spring Action 2-inch Belt Clip (also R2, DEP450, DP1400)', note: '' },
              { pn: 'NTN5243',     desc: 'Adjustable Nylon Carrying Strap', note: '' },
              { pn: 'RLN5716',     desc: 'Replacement T-Strap for Leather Cases', note: 'Soft leather, 2.5-inch, Non-Display' },
              { pn: '4280483B04',  desc: 'Replacement 3-inch Swivel Belt Loop', note: '' },
              { pn: '4280483B03',  desc: 'Replacement 2.5-inch Swivel Belt Loop', note: '' },
              { pn: 'RLN5500',     desc: 'Retainer Kit', note: 'Hard leather, 2.5-inch Fixed' },
              { pn: 'HLN6602',     desc: 'Universal Chest Pack with Radio Holder, Pen Holder, Velcro Pouch', note: '' },
              { pn: 'RLN4570',     desc: 'Break-Away Chest Pack', note: '' },
              { pn: 'RLN4815',     desc: 'Radio Pack Utility Case', note: '' },
              { pn: '4280384F89',  desc: 'Radio Pack Extension Belt for waists over 40 inches (for RLN4815)', note: '' },
              { pn: 'HLN9985',     desc: 'Waterproof Bag with Large Strap', note: '' },
            ]
          },
        ]
      },
      cables: {
        label: 'Programming Cables',
        icon: '',
        sections: [
          {
            title: 'Programming Cables',
            items: [
              { pn: 'PMKN4128', desc: 'Portable Programming USB Cable', note: 'For R2 and CP200d' },
            ]
          },
        ]
      },
      antennas: {
        label: 'Antennas',
        icon: '',
        sections: [
          {
            title: 'UHF Antennas',
            items: [
              { pn: '8505816K24', desc: 'UHF Heliflex Stubby Antenna, 403-440 MHz, 9cm', note: '' },
              { pn: 'PMAE4016',   desc: 'UHF Wideband Whip Antenna, 403-520 MHz, 17cm', note: '' },
              { pn: 'PMAE4002',   desc: 'UHF Stubby Antenna, 403-433 MHz, 9cm', note: '' },
              { pn: 'PMAE4003',   desc: 'UHF Stubby Antenna, 430-470 MHz, 9cm', note: '' },
            ]
          },
          {
            title: 'VHF Antennas',
            items: [
              { pn: 'PMAD4014',  desc: 'VHF Whip Antenna, 136-155 MHz, 14cm', note: '' },
              { pn: 'PMAD4042',  desc: 'VHF Heliflex Antenna, 136-150.8 MHz, 14cm', note: '' },
              { pn: 'NAD6502AR', desc: 'VHF Heliflex Antenna, 146-174 MHz, 15cm', note: '' },
              { pn: 'PMAD4012',  desc: 'VHF Stubby Antenna, 136-155 MHz, 9cm', note: '' },
              { pn: 'PMAD4013',  desc: 'VHF Stubby Antenna, 155-174 MHz, 9cm', note: '' },
              { pn: 'HAD9742',   desc: 'VHF Stubby Antenna, 146-162 MHz, 9cm', note: '' },
              { pn: 'HAD9743',   desc: 'VHF Stubby Antenna, 162-174 MHz, 9cm', note: '' },
            ]
          },
        ]
      },
    }
  },

  // ── DEP450 / DP1400 / XiR P3688 ───────────────────────────────────────────
  'dep450': {
    name: 'DEP450 / DP1400 / XiR P3688',
    sub: 'Commercial Portable Family',
    tags: ['Digital/Analog', 'IP54', 'Windporting'],
    tagStyles: ['', 'green', 'orange'],
    categories: {
      rsm: {
        label: 'Remote Speaker Mics',
        icon: '',
        sections: [
          {
            title: 'Windporting & Mag One RSMs',
            items: [
              { pn: 'PMMN4029', desc: 'Windporting RSM, Submersible (IP57)', badges: ['WINDPORT','IP57'], note: 'Small, 55×60×27mm' },
              { pn: 'PMMN4013', desc: 'Windporting RSM with 3.5mm Audio Jack (IP54)', badges: ['WINDPORT','IP54'], note: 'Small, 55×60×27mm' },
              { pn: 'PMMN4092', desc: 'Mag One Remote Speaker Microphone', note: 'Small, 49×72×23mm' },
            ]
          },
          {
            title: 'RSM Earpiece Accessories (3.5mm)',
            items: [
              { pn: 'AARLN4885',  desc: 'Receive-Only Foam Covered Earbud with Coiled Cord (3.5mm)', note: '' },
              { pn: 'RLN4941',   desc: 'Receive-Only Earpiece with Translucent Tube and Rubber Eartip (3.5mm)', note: '' },
              { pn: 'PMLN4620',  desc: 'Receive-Only D-Shell Earpiece (3.5mm)', note: '' },
              { pn: 'WADN4190',  desc: 'Receive-Only Flexible Earpiece (3.5mm)', note: '' },
              { pn: 'PMLN7560',  desc: 'Receive-Only Earpiece with Translucent Tube and Rubber Eartip (3.5mm)', note: 'DEP450 / DP1400 / XiR P3688 only' },
              { pn: 'PMLN7396',  desc: 'Receive-Only Adjustable D-Style with Standard 3.5mm Jack', note: 'DEP450 / DP1400 / XiR P3688 only' },
            ]
          },
        ]
      },
      surveillance: {
        cols: ["Part Number", "Description", "Wires", "PTT", "Tube", "VOX", "Noise Cancel"],
        label: 'Surveillance & Earpieces',
        icon: '',
        sections: [
          {
            title: 'Surveillance Kits',
            items: [
              { pn: 'PMLN6536', desc: '2-Wire Surveillance Kit with Quick Disconnect Translucent Tube, Black', note: 'CP200d/DEP450/XiR P3688/CP100d/DEP250/CP261/XiR Cxxxx', checks: {wires: "2", ptt: 0, tube: 1, vox: 0, nc: 0} },
              { pn: 'PMLN6530', desc: '2-Wire Surveillance Kit with Translucent Tube, Black', note: '', checks: {wires: "2", ptt: 0, tube: 1, vox: 0, nc: 0} },
              { pn: 'PMLN6445', desc: '2-Wire Surveillance Kit with Translucent Tube, Beige', note: '', checks: {wires: "2", ptt: 0, tube: 1, vox: 0, nc: 0} },
            ]
          },
          {
            title: 'Surveillance Replacement Kits',
            items: [
              { pn: 'RLN6242',     desc: 'Quick Disconnect Low Noise Kit with Translucent Tube and Clear Rubber Eartip', note: '' },
              { pn: '5080370E97',  desc: 'Replacement Standard Clear Rubber Eartip for RLN6242 (Pack of 25)', note: '' },
              { pn: '5080384F72',  desc: 'Replacement Foam Plugs for RLN6242, NRR 24dB (Pack of 50 pairs)', note: '' },
              { pn: 'RLN6282',     desc: 'Replacement Standard Clear Rubber Eartip, Pack of 50', note: '' },
              { pn: 'RLN6230',     desc: 'Extreme Noise Kit with 2 Foam Earplugs, Black Clip (for PMLN6536)', note: '' },
              { pn: '67009254001', desc: 'Replacement Standard Clear Rubber Eartip for PMLN6530/6445, Pack of 10', note: '', checks: {wires: "\u2014", ptt: 0, tube: 0, vox: 0, nc: 0} },
              { pn: 'RLN4760',     desc: 'Small Custom Earpiece, Right Ear', note: '' },
              { pn: 'RLN4761',     desc: 'Medium Custom Earpiece, Right Ear', note: '' },
              { pn: 'RLN4762',     desc: 'Large Custom Earpiece, Right Ear', note: '' },
              { pn: 'RLN4763',     desc: 'Small Custom Earpiece, Left Ear', note: '' },
              { pn: 'RLN4764',     desc: 'Medium Custom Earpiece, Left Ear', note: '' },
              { pn: 'RLN4765',     desc: 'Large Custom Earpiece, Left Ear', note: '' },
              { pn: 'RLN6511',     desc: 'Clear EP7-Small Sonic Defenders Ultra Earplugs, NRR 28dB', note: '' },
              { pn: 'RLN6512',     desc: 'Clear EP7-Medium Sonic Defenders Ultra Earplugs, NRR 28dB', note: '' },
              { pn: 'RLN6513',     desc: 'Clear EP7-Large Sonic Defenders Ultra Earplugs, NRR 28dB', note: '' },
            ]
          },
          {
            title: 'Earpieces & Mag One™ Accessories',
            items: [
              { pn: 'PMLN6533', desc: 'Earbud with Combined Microphone and PTT', note: '', checks: {wires: "\u2014", ptt: 1, tube: 0, vox: 0, nc: 0} },
              { pn: 'PMLN6535', desc: 'D-Style Earpiece with Microphone and PTT', note: '', checks: {wires: "\u2014", ptt: 1, tube: 0, vox: 0, nc: 0} },
              { pn: 'PMLN6532', desc: 'Mag One Swivel Earpiece with In-line Mic and PTT', note: '', checks: {wires: "\u2014", ptt: 1, tube: 0, vox: 0, nc: 0} },
              { pn: 'PMLN6534', desc: 'Mag One Earbud with In-line Mic, PTT and VOX Switch', note: '', checks: {wires: "\u2014", ptt: 1, tube: 0, vox: 1, nc: 0} },
              { pn: 'PMLN6531', desc: 'Mag One Ear Receiver with In-line Mic, PTT and VOX Switch', note: '', checks: {wires: "\u2014", ptt: 1, tube: 0, vox: 1, nc: 0} },
              { pn: 'PMLN6537', desc: 'Mag One Earset with Boom Microphone and In-line PTT and VOX', note: '', checks: {wires: "\u2014", ptt: 1, tube: 0, vox: 1, nc: 0} },
              { pn: '7580372E11', desc: 'Replacement Foam Ear Cushion for BDN6720A', note: 'CP200d/DEP450/DP1400 only', checks: {wires: "\u2014", ptt: 0, tube: 0, vox: 0, nc: 0} },
            ]
          },
        ]
      },
      headsets: {
        cols: ["Part Number", "Description", "Noise Cancel", "NRR", "PTT", "VOX", "Bone Cond.", "Hard Hat"],
        label: 'Headsets',
        icon: '',
        sections: [
          {
            title: 'Heavy-Duty Headsets',
            items: [
              { pn: 'PMLN7468', desc: 'Heavy-Duty Over-the-Head Dual Muff, Noise-Canceling Boom Mic, 24dB NRR', note: 'No PTT (use radio PTT) — not available in EMEA', checks: {nc: 1, nrr: "24dB", ptt: 1, vox: 0, bone: 0, hh: 0} },
              { pn: 'PMLN6854', desc: 'Heavy-Duty Behind-the-Head Dual Muff (Hard Hat Compatible), NC Boom Mic, In-line PTT, 24dB NRR', note: '', checks: {nc: 0, nrr: "24dB", ptt: 1, vox: 0, bone: 0, hh: 1} },
            ]
          },
          {
            title: 'Lightweight Headsets',
            items: [
              { pn: 'PMLN6538', desc: 'Lightweight Over-the-Head Single Muff, Swivel Boom Mic, In-line PTT', note: '', checks: {nc: 0, nrr: "\u2014", ptt: 1, vox: 0, bone: 0, hh: 0} },
              { pn: 'PMLN6542', desc: 'Mag One Ultra-Lite Behind-the-Head, Adjustable, Boom Mic, In-line PTT and VOX', note: '', checks: {nc: 0, nrr: "\u2014", ptt: 1, vox: 1, bone: 0, hh: 0} },
              { pn: 'PMLN6541', desc: 'Lightweight Temple Transducer Headset with In-line Mic and PTT', note: 'Bone conduction — CP200d/DEP450/DP1400/CP100d/DEP250/DP5xx/CP261/XiR Cxxxx', checks: {nc: 0, nrr: "\u2014", ptt: 1, vox: 0, bone: 1, hh: 0} },
            ]
          },
        ]
      },
      batteries: {
        label: 'Batteries',
        icon: '',
        sections: [
          {
            title: 'DEP450 / XiR P3688 Batteries',
            items: [
              { pn: 'NNTN4851',  desc: 'NiMH 1400mAh Battery', badges: ['IP54'], note: '60×120×21mm, 210g, -20°C to +60°C' },
              { pn: 'NNTN4970',  desc: 'Slim Li-Ion 1700mAh Battery', badges: ['IP54'], note: '60×120×18mm, 147g, -10°C to +60°C' },
              { pn: 'NNTN4497',  desc: 'Li-Ion 2250mAh Battery', badges: ['IP54'], note: '60×120×24mm, 140g, -10°C to +60°C' },
              { pn: 'PMNN4458',  desc: 'Mag One Li-Ion 2150mAh Battery', badges: ['IP54'], note: 'CP200d/DEP450 only; 60×120×24mm, 140g' },
            ]
          },
          {
            title: 'DP1400 Batteries',
            items: [
              { pn: 'PMNN4251',  desc: 'NiMH 1400mAh Battery (CE)', badges: ['IP54'], note: '60×120×21mm, 210g, -20°C to +60°C' },
              { pn: 'PMNN4253',  desc: 'Slim Li-Ion 1600mAh Battery (CE)', badges: ['IP54'], note: '60×120×18mm, 147g, -10°C to +60°C' },
              { pn: 'PMNN4254',  desc: 'Li-Ion 2300mAh Battery (CE)', badges: ['IP54'], note: '60×120×24mm, 140g, -10°C to +60°C' },
              { pn: 'PMNN4258',  desc: 'Li-Ion 2900mAh Battery (CE)', badges: ['IP54'], note: '60×120×24mm, 145g, -10°C to +60°C' },
            ]
          },
        ]
      },
      chargers: {
        label: 'Chargers',
        icon: '',
        sections: [
          {
            title: 'Single-Unit Chargers',
            items: [
              { pn: 'WPLN4138',  desc: 'Rapid-Rate Desktop Charger, 120V US', note: '1-pocket' },
              { pn: 'PMLN5193',  desc: 'Rapid-Rate Charger with Switch Mode Power Supply, 100-240V US', note: '1-pocket — international variants available' },
              { pn: 'PMLN7089',  desc: 'Travel Charger with Vehicular Adapter and Mounting Bracket', note: 'Cigarette lighter — US only' },
            ]
          },
          {
            title: 'Multi-Unit Chargers',
            items: [
              { pn: 'PMLN6588', desc: 'Universal 6-Pocket Multi-Unit Charger, 100-240V US', note: 'International variants available' },
            ]
          },
        ]
      },
      carry: {
        label: 'Carry Solutions',
        icon: '',
        sections: [
          {
            title: 'Cases',
            items: [
              { pn: 'HLN9701', desc: 'Nylon Case with 3-inch Fixed Belt Loop and D-Rings (Non-Display)', note: 'CP200d/DEP450/DP1400/XiR P3688' },
              { pn: 'RLN5383', desc: 'Hard Leather Case with 3-inch Fixed Belt Loop (Non-Display)', note: '' },
              { pn: 'RLN5384', desc: 'Hard Leather Case with 2.5-inch Swivel Belt Loop (Non-Display)', note: '' },
              { pn: 'RLN5385', desc: 'Hard Leather Case with 3-inch Swivel Belt Loop (Non-Display)', note: '' },
            ]
          },
          {
            title: 'Clips & Straps',
            items: [
              { pn: 'HLN9844',    desc: 'Spring Action 2-inch Belt Clip', note: '' },
              { pn: 'HLN8255',    desc: 'Spring Action 3-inch Belt Clip', note: '' },
              { pn: 'NTN5243',    desc: 'Adjustable Nylon Carrying Strap', note: '' },
              { pn: 'HLN6602',    desc: 'Universal Chest Pack with Radio Holder, Pen Holder, Velcro Pouch', note: '' },
              { pn: 'RLN4570',    desc: 'Break-Away Chest Pack', note: '' },
              { pn: 'RLN4815',    desc: 'Radio Pack Utility Case', note: 'CP200d/DEP450/DP1400/XiR P3688 only' },
              { pn: '4280384F89', desc: 'Radio Pack Extension Belt for waists over 40 inches (for RLN4815)', note: '' },
              { pn: 'HLN9985',    desc: 'Waterproof Bag with Large Strap', note: '' },
            ]
          },
        ]
      },
      antennas: {
        label: 'Antennas',
        icon: '',
        sections: [
          {
            title: 'UHF Antennas',
            items: [
              { pn: 'PMAE4016', desc: 'UHF Wideband Whip Antenna, 403-520 MHz, 17cm', note: '' },
              { pn: 'PMAE4002', desc: 'UHF Stubby Antenna, 403-433 MHz, 9cm', note: '' },
              { pn: 'PMAE4003', desc: 'UHF Stubby Antenna, 430-470 MHz, 9cm', note: '' },
            ]
          },
          {
            title: 'VHF Antennas',
            items: [
              { pn: 'PMAD4014',  desc: 'VHF Whip Antenna, 136-155 MHz, 14cm', note: '' },
              { pn: 'PMAD4042',  desc: 'VHF Heliflex Antenna, 136-150.8 MHz, 14cm', note: '' },
              { pn: 'NAD6502AR', desc: 'VHF Heliflex Antenna, 146-174 MHz, 15cm', note: '' },
              { pn: 'PMAD4012',  desc: 'VHF Stubby Antenna, 136-155 MHz, 9cm', note: '' },
              { pn: 'PMAD4013',  desc: 'VHF Stubby Antenna, 155-174 MHz, 9cm', note: '' },
              { pn: 'HAD9742',   desc: 'VHF Stubby Antenna, 146-162 MHz, 9cm', note: '' },
              { pn: 'HAD9743',   desc: 'VHF Stubby Antenna, 162-174 MHz, 9cm', note: '' },
            ]
          },
        ]
      },
    }
  },

  // ── SL SERIES PORTABLE ─────────────────────────────────────────────────────
  'sl300': {
    name: 'SL300 / SL500 / SL1600 / SL1M',
    sub: 'Slim Commercial Portable — Active View Display',
    tags: ['Digital/Analog', 'IP67', 'Slim Form Factor', 'Bluetooth'],
    tagStyles: ['', 'green', 'orange', ''],
    categories: {
      rsm: {
        label: 'Remote Speaker Mics',
        icon: '',
        sections: [
          {
            title: 'SL Series RSMs',
            items: [
              { pn: 'PMMN4125', desc: 'RM250 Wired Remote Speaker Microphone with Windporting, 2.5mm Jack (IP67)', badges: ['WINDPORT','IP67'], note: 'Large, 58×84×24mm' },
            ]
          },
          {
            title: 'RSM Earpiece Accessories (3.5mm)',
            items: [
              { pn: 'AARLN4885',  desc: 'Receive-Only Foam Covered Earbud with Coiled Cord (3.5mm)', note: '' },
              { pn: 'RLN4941',   desc: 'Receive-Only Earpiece with Translucent Tube and Rubber Eartip (3.5mm)', note: '' },
              { pn: 'PMLN4620',  desc: 'Receive-Only D-Shell Earpiece (3.5mm)', note: '' },
              { pn: 'WADN4190',  desc: 'Receive-Only Flexible Earpiece (3.5mm)', note: '' },
            ]
          },
        ]
      },
      surveillance: {
        cols: ["Part Number", "Description", "Wires", "PTT", "Tube", "VOX", "Noise Cancel"],
        label: 'Surveillance & Earpieces',
        icon: '',
        sections: [
          {
            title: 'Surveillance Kits',
            items: [
              { pn: 'PMLN7157', desc: '2-Wire Surveillance Kit with Translucent Tube, Black', note: '', checks: {wires: "2", ptt: 0, tube: 1, vox: 0, nc: 0} },
              { pn: 'PMLN7158', desc: '1-Wire Surveillance Kit with In-line Mic and PTT, Black', note: '', checks: {wires: "1", ptt: 1, tube: 0, vox: 0, nc: 0} },
            ]
          },
          {
            title: 'Surveillance Replacement Kits',
            items: [
              { pn: 'RLN6242',     desc: 'Quick Disconnect Low Noise Kit with Translucent Tube and Clear Rubber Eartip', note: '' },
              { pn: '5080370E97',  desc: 'Replacement Standard Clear Rubber Eartip for RLN6242 (Pack of 25)', note: '' },
              { pn: '5080384F72',  desc: 'Replacement Foam Plugs for RLN6242, NRR 24dB (Pack of 50 pairs)', note: '' },
              { pn: 'RLN6282',     desc: 'Replacement Standard Clear Rubber Eartip, Pack of 50', note: '' },
              { pn: 'RLN4760',     desc: 'Small Custom Earpiece, Right Ear', note: '' },
              { pn: 'RLN4761',     desc: 'Medium Custom Earpiece, Right Ear', note: '' },
              { pn: 'RLN4762',     desc: 'Large Custom Earpiece, Right Ear', note: '' },
              { pn: 'RLN4763',     desc: 'Small Custom Earpiece, Left Ear', note: '' },
              { pn: 'RLN4764',     desc: 'Medium Custom Earpiece, Left Ear', note: '' },
              { pn: 'RLN4765',     desc: 'Large Custom Earpiece, Left Ear', note: '' },
              { pn: 'RLN6511',     desc: 'Clear EP7-Small Sonic Defenders Ultra Earplugs, NRR 28dB', note: '' },
              { pn: 'RLN6512',     desc: 'Clear EP7-Medium Sonic Defenders Ultra Earplugs, NRR 28dB', note: '' },
              { pn: 'RLN6513',     desc: 'Clear EP7-Large Sonic Defenders Ultra Earplugs, NRR 28dB', note: '' },
            ]
          },
          {
            title: 'Earpieces & Mag One™',
            items: [
              { pn: 'PMLN7189', desc: 'Swivel Earpiece with In-line Mic and PTT', note: '', checks: {wires: "\u2014", ptt: 1, tube: 0, vox: 0, nc: 0} },
              { pn: 'PMLN7156', desc: 'Mag One Earbud with In-line Mic and PTT', note: '', checks: {wires: "\u2014", ptt: 1, tube: 0, vox: 0, nc: 0} },
              { pn: 'PMLN7159', desc: 'Adjustable D-Style Earpiece with In-line Mic and PTT, Black', note: '', checks: {wires: "\u2014", ptt: 1, tube: 0, vox: 0, nc: 0} },
            ]
          },
        ]
      },
      batteries: {
        label: 'Batteries',
        icon: '',
        sections: [
          {
            title: 'SL Series Batteries',
            items: [
              { pn: 'PMNN4468',  desc: 'BT100x Li-Ion 2200mAh Battery (CE)', note: '12×36×54mm, 50g, -10°C to +60°C' },
              { pn: 'PMLN7074',  desc: 'Replacement Battery Cover', note: '' },
            ]
          },
        ]
      },
      chargers: {
        label: 'Chargers',
        icon: '',
        sections: [
          {
            title: 'Single-Unit Chargers',
            items: [
              { pn: '25009298001', desc: 'Micro-USB Single-Unit Rapid Rate 5V/1A Power Supply, 100-240V US', note: 'International variants: PS000042A12-18' },
              { pn: 'PMLN7109',    desc: 'Single-Unit Rapid Rate Charger, 100-240V US', note: '70×70×52mm — international variants: PMLN7110-7163, PMLN7987' },
            ]
          },
          {
            title: 'Multi-Unit Chargers',
            items: [
              { pn: 'PMLN8569', desc: 'Six-Pocket Multi-Unit Rapid Rate Charger, US', note: '65×424×110mm — international variants: PMLN7102-7162' },
            ]
          },
          {
            title: 'Cables',
            items: [
              { pn: 'CB000262A01', desc: 'Micro USB Programming Cable', note: '' },
            ]
          },
        ]
      },
      carry: {
        label: 'Carry Solutions',
        icon: '',
        sections: [
          {
            title: 'Cases & Clips',
            items: [
              { pn: 'PMLN7190', desc: 'Carry Holster with Swivel Belt Clip', note: 'Plastic, 1.5-inch Swivel' },
              { pn: 'PMLN7128', desc: 'Heavy-Duty Swivel Belt Clip', note: 'Plastic, 1.5-inch Swivel' },
            ]
          },
          {
            title: 'Straps',
            items: [
              { pn: 'PMLN6074', desc: 'Nylon Wrist Strap', note: '' },
              { pn: 'PMLN7076', desc: 'Flexible Quick Release Hand Strap', note: '' },
              { pn: 'NTN5243',  desc: 'Adjustable Nylon Carrying Strap', note: '' },
              { pn: 'HLN9985',  desc: 'Waterproof Bag with Large Strap', note: '' },
            ]
          },
        ]
      },
      antennas: {
        label: 'Antennas',
        icon: '',
        sections: [
          {
            title: 'UHF Antennas',
            items: [
              { pn: 'PMAE4093', desc: 'UHF Stubby Antenna, 403-425 MHz, 4.5cm', note: 'SL series compact form factor' },
              { pn: 'PMAE4094', desc: 'UHF Stubby Antenna, 420-445 MHz, 4.5cm', note: '' },
              { pn: 'PMAE4095', desc: 'UHF Stubby Antenna, 435-470 MHz, 4.5cm', note: '' },
            ]
          },
          {
            title: 'VHF Antennas',
            items: [
              { pn: 'PMAD4144', desc: 'VHF Stubby Antenna, 136-144 MHz, 5cm', note: '' },
              { pn: 'PMAD4145', desc: 'VHF Stubby Antenna, 144-156 MHz, 5cm', note: '' },
              { pn: 'PMAD4146', desc: 'VHF Stubby Antenna, 156-174 MHz, 5cm', note: '' },
            ]
          },
          {
            title: 'Antenna ID Bands',
            items: [
              { pn: '32012144001', desc: 'Antenna ID Band, Gray (Pack of 10)', note: '' },
              { pn: '32012144002', desc: 'Antenna ID Band, Yellow (Pack of 10)', note: '' },
              { pn: '32012144003', desc: 'Antenna ID Band, Green (Pack of 10)', note: '' },
              { pn: '32012144004', desc: 'Antenna ID Band, Blue (Pack of 10)', note: '' },
              { pn: '32012144005', desc: 'Antenna ID Band, Purple (Pack of 10)', note: '' },
            ]
          },
        ]
      },
    }
  },

  // ── CP100d / DEP250 / XiR Cxxxx PORTABLES ─────────────────────────────────
  'cp100d': {
    name: 'CP100d / DEP250 / DP5xx / CP261 / XiR Cxxxx',
    sub: 'Compact Commercial Portable Family',
    tags: ['Digital/Analog', 'IP54', 'Compact Body'],
    tagStyles: ['', 'green', ''],
    categories: {
      rsm: {
        label: 'Remote Speaker Mics',
        icon: '',
        sections: [
          {
            title: 'Windporting RSMs',
            items: [
              { pn: 'PMMN4029', desc: 'Windporting RSM, Submersible (IP57)', badges: ['WINDPORT','IP57'], note: '' },
              { pn: 'PMMN4013', desc: 'Windporting RSM with 3.5mm Audio Jack (IP54)', badges: ['WINDPORT','IP54'], note: '' },
            ]
          },
          {
            title: 'RSM Earpiece Accessories (3.5mm)',
            items: [
              { pn: 'AARLN4885',  desc: 'Receive-Only Foam Covered Earbud with Coiled Cord (3.5mm)', note: '' },
              { pn: 'RLN4941',   desc: 'Receive-Only Earpiece with Translucent Tube and Rubber Eartip (3.5mm)', note: '' },
              { pn: 'PMLN4620',  desc: 'Receive-Only D-Shell Earpiece (3.5mm)', note: '' },
              { pn: 'WADN4190',  desc: 'Receive-Only Flexible Earpiece (3.5mm)', note: '' },
            ]
          },
        ]
      },
      surveillance: {
        cols: ["Part Number", "Description", "Wires", "PTT", "Tube", "VOX", "Noise Cancel"],
        label: 'Surveillance & Earpieces',
        icon: '',
        sections: [
          {
            title: 'Surveillance Kits',
            items: [
              { pn: 'PMLN6536', desc: '2-Wire Surveillance Kit with Quick Disconnect Translucent Tube, Black', note: '', checks: {wires: "2", ptt: 0, tube: 1, vox: 0, nc: 0} },
              { pn: 'PMLN6530', desc: '2-Wire Surveillance Kit with Translucent Tube, Black', note: '', checks: {wires: "2", ptt: 0, tube: 1, vox: 0, nc: 0} },
              { pn: 'PMLN6445', desc: '2-Wire Surveillance Kit with Translucent Tube, Beige', note: '', checks: {wires: "2", ptt: 0, tube: 1, vox: 0, nc: 0} },
            ]
          },
          {
            title: 'Surveillance Replacement Kits',
            items: [
              { pn: 'RLN6242',     desc: 'Quick Disconnect Low Noise Kit with Translucent Tube and Clear Rubber Eartip', note: '' },
              { pn: 'RLN6282',     desc: 'Replacement Standard Clear Rubber Eartip, Pack of 50', note: '' },
              { pn: 'RLN6230',     desc: 'Extreme Noise Kit with 2 Foam Earplugs, Black Clip (for PMLN6536)', note: '' },
              { pn: '67009254001', desc: 'Replacement Standard Clear Rubber Eartip for PMLN6530/6445, Pack of 10', note: '', checks: {wires: "\u2014", ptt: 0, tube: 0, vox: 0, nc: 0} },
              { pn: 'RLN4760',     desc: 'Small Custom Earpiece, Right Ear', note: '' },
              { pn: 'RLN4761',     desc: 'Medium Custom Earpiece, Right Ear', note: '' },
              { pn: 'RLN4762',     desc: 'Large Custom Earpiece, Right Ear', note: '' },
              { pn: 'RLN4763',     desc: 'Small Custom Earpiece, Left Ear', note: '' },
              { pn: 'RLN4764',     desc: 'Medium Custom Earpiece, Left Ear', note: '' },
              { pn: 'RLN4765',     desc: 'Large Custom Earpiece, Left Ear', note: '' },
              { pn: 'RLN6511',     desc: 'Clear EP7-Small Sonic Defenders Ultra Earplugs, NRR 28dB', note: '' },
              { pn: 'RLN6512',     desc: 'Clear EP7-Medium Sonic Defenders Ultra Earplugs, NRR 28dB', note: '' },
              { pn: 'RLN6513',     desc: 'Clear EP7-Large Sonic Defenders Ultra Earplugs, NRR 28dB', note: '' },
            ]
          },
          {
            title: 'Earpieces & Mag One™ Accessories',
            items: [
              { pn: 'PMLN6533', desc: 'Earbud with Combined Microphone and PTT', note: '', checks: {wires: "\u2014", ptt: 1, tube: 0, vox: 0, nc: 0} },
              { pn: 'PMLN6535', desc: 'D-Style Earpiece with Microphone and PTT', note: '', checks: {wires: "\u2014", ptt: 1, tube: 0, vox: 0, nc: 0} },
              { pn: 'PMLN6532', desc: 'Mag One Swivel Earpiece with In-line Mic and PTT', note: '', checks: {wires: "\u2014", ptt: 1, tube: 0, vox: 0, nc: 0} },
              { pn: 'PMLN6534', desc: 'Mag One Earbud with In-line Mic, PTT and VOX Switch', note: '', checks: {wires: "\u2014", ptt: 1, tube: 0, vox: 1, nc: 0} },
              { pn: 'PMLN6531', desc: 'Mag One Ear Receiver with In-line Mic, PTT and VOX Switch', note: '', checks: {wires: "\u2014", ptt: 1, tube: 0, vox: 1, nc: 0} },
              { pn: 'PMLN6537', desc: 'Mag One Earset with Boom Microphone and In-line PTT and VOX', note: '', checks: {wires: "\u2014", ptt: 1, tube: 0, vox: 1, nc: 0} },
            ]
          },
        ]
      },
      headsets: {
        cols: ["Part Number", "Description", "Noise Cancel", "NRR", "PTT", "VOX", "Bone Cond.", "Hard Hat"],
        label: 'Headsets',
        icon: '',
        sections: [
          {
            title: 'Lightweight Headsets',
            items: [
              { pn: 'PMLN6538', desc: 'Lightweight Over-the-Head Single Muff, Swivel Boom Mic, In-line PTT', note: '', checks: {nc: 0, nrr: "\u2014", ptt: 1, vox: 0, bone: 0, hh: 0} },
              { pn: 'PMLN6542', desc: 'Mag One Ultra-Lite Behind-the-Head, Adjustable, Boom Mic, In-line PTT and VOX', note: '', checks: {nc: 0, nrr: "\u2014", ptt: 1, vox: 1, bone: 0, hh: 0} },
              { pn: 'PMLN6541', desc: 'Lightweight Temple Transducer Headset with In-line Mic and PTT', note: 'Bone conduction', checks: {nc: 0, nrr: "\u2014", ptt: 1, vox: 0, bone: 1, hh: 0} },
            ]
          },
        ]
      },
      batteries: {
        label: 'Batteries',
        icon: '',
        sections: [
          {
            title: 'CP100d / DEP250 / DP5xx / CP261 / XiR Cxxxx Batteries',
            items: [
              { pn: 'PMNN4476', desc: 'Slim Li-Ion 1750mAh Battery', badges: ['IP54'], note: '54×119×18mm, 125g, -10°C to +60°C' },
              { pn: 'PMNN4080', desc: 'Li-Ion 2250mAh Battery', badges: ['IP54'], note: '54×119×23mm, 150g, -10°C to +60°C' },
            ]
          },
        ]
      },
      chargers: {
        label: 'Chargers',
        icon: '',
        sections: [
          {
            title: 'Single-Unit Chargers',
            items: [
              { pn: 'PMPN4172',  desc: 'Rapid-Rate Desktop Charger, 100-240V US', note: '1-pocket — international variants: PMLN5393-5400, PMLN7006, PMLN8359' },
            ]
          },
          {
            title: 'Multi-Unit Chargers',
            items: [
              { pn: 'PMLN6597', desc: 'Universal 6-Pocket Multi-Unit Charger, 100-240V US', note: 'International variants: PMLN6594-6602' },
            ]
          },
        ]
      },
      carry: {
        label: 'Carry Solutions',
        icon: '',
        sections: [
          {
            title: 'Cases & Clips',
            items: [
              { pn: 'PMLN7075', desc: 'Nylon Case with 3-inch Fixed Belt Loop', note: '' },
              { pn: 'HLN9844',  desc: 'Spring Action 2-inch Belt Clip', note: '' },
              { pn: 'NTN5243',  desc: 'Adjustable Nylon Carrying Strap', note: '' },
              { pn: 'HLN6602',  desc: 'Universal Chest Pack with Radio Holder, Pen Holder, Velcro Pouch', note: '' },
              { pn: 'RLN4570',  desc: 'Break-Away Chest Pack', note: '' },
              { pn: 'RLN4815',  desc: 'Radio Pack Utility Case', note: '' },
              { pn: 'HLN9985',  desc: 'Waterproof Bag with Large Strap', note: '' },
            ]
          },
        ]
      },
      antennas: {
        label: 'Antennas',
        icon: '',
        sections: [
          {
            title: 'UHF Antennas',
            items: [
              { pn: 'PMAE4002', desc: 'UHF Stubby Antenna, 403-433 MHz, 9cm', note: '' },
              { pn: 'PMAE4003', desc: 'UHF Stubby Antenna, 430-470 MHz, 9cm', note: '' },
              { pn: 'PMAE4006', desc: 'UHF Stubby Antenna, 465-495 MHz, 9cm', note: '' },
              { pn: 'PMAE4016', desc: 'UHF Whip Antenna, 403-520 MHz, 17cm', note: '' },
            ]
          },
          {
            title: 'VHF Antennas',
            items: [
              { pn: 'PMAD4014',  desc: 'VHF Whip Antenna, 136-155 MHz, 14cm', note: '' },
              { pn: 'PMAD4042',  desc: 'VHF Heliflex Antenna, 136-150.8 MHz, 14cm', note: '' },
              { pn: 'NAD6502AR', desc: 'VHF Heliflex Antenna, 146-174 MHz, 15cm', note: '' },
              { pn: 'HAD9338BR', desc: 'VHF Helifex Antenna, 136-162 MHz, 14cm', note: '' },
              { pn: 'PMAD4012',  desc: 'VHF Stubby Antenna, 136-155 MHz, 9cm', note: '' },
              { pn: 'PMAD4013',  desc: 'VHF Stubby Antenna, 155-174 MHz, 9cm', note: '' },
              { pn: 'HAD9742',   desc: 'VHF Stubby Antenna, 146-162 MHz, 9cm', note: '' },
              { pn: 'HAD9743',   desc: 'VHF Stubby Antenna, 162-174 MHz, 9cm', note: '' },
            ]
          },
        ]
      },
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // MOBILE RADIOS
  // ─────────────────────────────────────────────────────────────────────────

  // ── CM200d / CM300d / DEM300 / DEM400 / DM1400 / DM1600 / XiR M3188 / XiR M3688 ──
  'cm200d': {
    name: 'CM200d / CM300d / DEM300 / DEM400',
    sub: 'Commercial Mobile Radio — Entry Tier',
    tags: ['Digital/Analog', 'Mobile', 'Simple Install'],
    tagStyles: ['', 'orange', ''],
    categories: {
      microphones: {
        label: 'Microphones',
        icon: '',
        sections: [
          {
            title: 'Mobile Microphones',
            items: [
              { pn: 'PMMN4090', desc: 'Standard Compact Microphone', note: '' },
              { pn: 'PMMN4091', desc: 'Heavy-Duty Microphone', note: '' },
              { pn: 'PMMN4089', desc: 'Keypad Microphone', note: '' },
              { pn: 'GMMN4065', desc: 'Visor Microphone', note: 'Mounts to sun visor for safe hands-free driving communication' },
              { pn: 'PMMN4098', desc: 'Desktop Microphone', note: '' },
            ]
          },
          {
            title: 'Microphone Accessories',
            items: [
              { pn: 'HLN9073', desc: 'Microphone Hang-Up Clip (requires installation)', note: '' },
              { pn: 'HLN9414', desc: 'Universal Microphone Hang-Up Clip (no installation required)', note: '' },
            ]
          },
        ]
      },
      ptt: {
        label: 'Vehicle PTT',
        icon: '',
        sections: [
          {
            title: 'Vehicle Remote PTT Solutions',
            items: [
              { pn: 'RLN4836', desc: 'Emergency Footswitch (use with Visor Mic GMMN4065)', note: '' },
              { pn: 'RLN4856', desc: 'Remote Mount Footswitch PTT (interface with Visor Mic GMMN4065)', note: '' },
              { pn: 'RLN4857', desc: 'Remote Mount Pushbutton PTT (interface with Visor Mic GMMN4065)', note: '' },
            ]
          },
        ]
      },
      mounting: {
        label: 'Installation & Mounting',
        icon: '',
        sections: [
          {
            title: 'Mounting Kits',
            items: [
              { pn: 'RLN6466',    desc: 'Low Profile Trunnion Kit', note: '' },
              { pn: 'RLN6467',    desc: 'High Profile Trunnion Kit', note: '' },
              { pn: 'RLN6468',    desc: 'Key Lock Trunnion Kit', note: '' },
              { pn: 'FTN6083',    desc: 'In-Dash Mounting Kit — DIN', note: '' },
            ]
          },
          {
            title: 'Power Cables',
            items: [
              { pn: 'HKN4137',    desc: 'Power Cable to Battery — 10 ft, 15 amp, 14 AWG', note: '' },
              { pn: 'HKN4191',    desc: 'Power Cable to Battery — 10 ft, 20 amp, 12 AWG', note: '' },
              { pn: 'HKN4192',    desc: 'Power Cable to Battery — 20 ft, 20 amp, 10 AWG', note: '' },
              { pn: 'HKN9327',    desc: 'Ignition Sense Cable', note: '' },
              { pn: '3012045001', desc: 'Trunnion Mounting Screws', note: '' },
            ]
          },
        ]
      },
      speakers: {
        label: 'External Speakers',
        icon: '',
        sections: [
          {
            title: 'External Speakers',
            items: [
              { pn: 'HSN8145',  desc: '7.5W External Speaker', note: 'For vehicle or desk' },
              { pn: 'RSN4001',  desc: '13W External Speaker', note: 'For vehicle or desk' },
              { pn: 'GMKN4084', desc: 'Speaker Extension Cable', note: '' },
            ]
          },
        ]
      },
      cables: {
        label: 'Cables & Connectors',
        icon: '',
        sections: [
          {
            title: 'Cables and Connectors',
            items: [
              { pn: 'PMKN4147',    desc: 'Mobile Front Programming Cable', note: '' },
              { pn: 'PMKN4151',    desc: 'Mobile Rear Accessory Connector Universal Cable', note: '' },
              { pn: 'HLN9457',     desc: '16-Pin Accessory Connector Kit', note: '' },
              { pn: 'PMLN5620',    desc: 'Connector Extender, 20 pieces', note: '' },
              { pn: '3202607Y01',  desc: 'Gasket, Cover, Accessory Connector', note: '' },
              { pn: '6680388A26',  desc: 'Mobile Crimping Tool', note: '' },
            ]
          },
        ]
      },
      antennas: {
        label: 'Antennas',
        icon: '',
        sections: [
          {
            title: 'VHF Antennas',
            items: [
              { pn: 'HAD4006', desc: 'VHF 136-144 MHz, 1/4 Wave Roof Mount, Mini-U', note: '' },
              { pn: 'HAD4007', desc: 'VHF 144-150.8 MHz, 1/4 Wave Roof Mount, Mini-U', note: '' },
              { pn: 'HAD4008', desc: 'VHF 150.8-162 MHz, 1/4 Wave Roof Mount, Mini-U', note: '' },
              { pn: 'HAD4009', desc: 'VHF 162-174 MHz, 1/4 Wave Roof Mount, Mini-U', note: '' },
              { pn: 'HAD4022', desc: 'VHF 132-174 MHz, 3.0 dB Gain, Through-Hole Mount, Mini-U', note: 'CM200d/CM300d/DEM300/DEM400/XiR M3188/M3688 only' },
            ]
          },
          {
            title: 'UHF Antennas',
            items: [
              { pn: 'HAE4002',    desc: 'UHF 403-430 MHz, 1/4 Wave Roof Mount, Mini-U', note: '' },
              { pn: 'HAE4003',    desc: 'UHF 450-470 MHz, 1/4 Wave Roof Mount, Mini-U', note: '' },
              { pn: 'HAE6022',    desc: 'UHF 403-527 MHz, 2 dB Gain, Through-Hole Mount, Mini-U', note: 'CM200d/CM300d/DEM300/DEM400/XiR M3188/M3688 only' },
              { pn: 'RAE4004ARB', desc: 'UHF 445-470 MHz, 5 dB Gain, Roof Mount, Mini-U (with base)', note: 'CM200d/CM300d/DEM300/DEM400/XiR M3188/M3688 only' },
            ]
          },
        ]
      },
    }
  },

  // ── DM1400 / DM1600 MOBILE ─────────────────────────────────────────────────
  'dm1400': {
    name: 'DM1400 / DM1600',
    sub: 'Commercial Mobile Radio — Mid Tier',
    tags: ['Digital/Analog', 'Mobile', 'DMR'],
    tagStyles: ['', 'orange', ''],
    categories: {
      microphones: {
        label: 'Microphones',
        icon: '',
        sections: [
          {
            title: 'Mobile Microphones',
            items: [
              { pn: 'PMMN4090', desc: 'Standard Compact Microphone', note: '' },
              { pn: 'PMMN4091', desc: 'Heavy-Duty Microphone', note: '' },
              { pn: 'PMMN4089', desc: 'Keypad Microphone', note: '' },
              { pn: 'GMMN4065', desc: 'Visor Microphone', note: 'Mounts to sun visor' },
              { pn: 'PMMN4098', desc: 'Desktop Microphone', note: '' },
            ]
          },
          {
            title: 'Microphone Accessories',
            items: [
              { pn: 'HLN9073', desc: 'Microphone Hang-Up Clip (requires installation)', note: '' },
              { pn: 'HLN9414', desc: 'Universal Microphone Hang-Up Clip (no installation required)', note: '' },
            ]
          },
        ]
      },
      ptt: {
        label: 'Vehicle PTT',
        icon: '',
        sections: [
          {
            title: 'Vehicle Remote PTT Solutions',
            items: [
              { pn: 'RLN4836', desc: 'Emergency Footswitch (use with Visor Mic GMMN4065)', note: '' },
              { pn: 'RLN4856', desc: 'Remote Mount Footswitch PTT', note: '' },
              { pn: 'RLN4857', desc: 'Remote Mount Pushbutton PTT', note: '' },
            ]
          },
        ]
      },
      mounting: {
        label: 'Installation & Mounting',
        icon: '',
        sections: [
          {
            title: 'Mounting Kits',
            items: [
              { pn: 'RLN6466', desc: 'Low Profile Trunnion Kit', note: '' },
              { pn: 'RLN6467', desc: 'High Profile Trunnion Kit', note: '' },
              { pn: 'RLN6468', desc: 'Key Lock Trunnion Kit', note: '' },
              { pn: 'FTN6083', desc: 'In-Dash Mounting Kit — DIN', note: '' },
            ]
          },
          {
            title: 'Power Cables',
            items: [
              { pn: 'HKN4137', desc: 'Power Cable to Battery — 10 ft, 15 amp, 14 AWG', note: '' },
              { pn: 'HKN4191', desc: 'Power Cable to Battery — 10 ft, 20 amp, 12 AWG', note: '' },
              { pn: 'HKN4192', desc: 'Power Cable to Battery — 20 ft, 20 amp, 10 AWG', note: '' },
              { pn: 'HKN9327', desc: 'Ignition Sense Cable', note: '' },
            ]
          },
        ]
      },
      speakers: {
        label: 'External Speakers',
        icon: '',
        sections: [
          {
            title: 'External Speakers',
            items: [
              { pn: 'HSN8145',  desc: '7.5W External Speaker', note: '' },
              { pn: 'RSN4001',  desc: '13W External Speaker', note: '' },
              { pn: 'GMKN4084', desc: 'Speaker Extension Cable', note: '' },
            ]
          },
        ]
      },
      cables: {
        label: 'Cables & Connectors',
        icon: '',
        sections: [
          {
            title: 'Cables and Connectors',
            items: [
              { pn: 'PMKN4147',   desc: 'Mobile Front Programming Cable', note: '' },
              { pn: 'PMKN4151',   desc: 'Mobile Rear Accessory Connector Universal Cable', note: '' },
              { pn: 'HLN9457',    desc: '16-Pin Accessory Connector Kit', note: '' },
              { pn: 'PMLN5620',   desc: 'Connector Extender, 20 pieces', note: '' },
              { pn: '3202607Y01', desc: 'Gasket, Cover, Accessory Connector', note: '' },
              { pn: '6680388A26', desc: 'Mobile Crimping Tool', note: '' },
            ]
          },
        ]
      },
      antennas: {
        label: 'Antennas',
        icon: '',
        sections: [
          {
            title: 'VHF Antennas',
            items: [
              { pn: 'HAD4006', desc: 'VHF 136-144 MHz, 1/4 Wave Roof Mount, Mini-U', note: '' },
              { pn: 'HAD4007', desc: 'VHF 144-150.8 MHz, 1/4 Wave Roof Mount, Mini-U', note: '' },
              { pn: 'HAD4008', desc: 'VHF 150.8-162 MHz, 1/4 Wave Roof Mount, Mini-U', note: '' },
              { pn: 'HAD4009', desc: 'VHF 162-174 MHz, 1/4 Wave Roof Mount, Mini-U', note: '' },
            ]
          },
          {
            title: 'UHF Antennas',
            items: [
              { pn: 'HAE4002', desc: 'UHF 403-430 MHz, 1/4 Wave Roof Mount, Mini-U', note: '' },
              { pn: 'HAE4003', desc: 'UHF 450-470 MHz, 1/4 Wave Roof Mount, Mini-U', note: '' },
            ]
          },
        ]
      },
    }
  },

  // ── XiR M3188 / M3688 MOBILE ───────────────────────────────────────────────
  'xirm3688': {
    name: 'XiR M3188 / M3688',
    sub: 'Commercial Mobile — Global Tier',
    tags: ['Digital/Analog', 'Mobile', 'Global Markets'],
    tagStyles: ['', 'orange', ''],
    categories: {
      microphones: {
        label: 'Microphones',
        icon: '',
        sections: [
          {
            title: 'Mobile Microphones',
            items: [
              { pn: 'PMMN4090', desc: 'Standard Compact Microphone', note: '' },
              { pn: 'PMMN4091', desc: 'Heavy-Duty Microphone', note: '' },
              { pn: 'PMMN4089', desc: 'Keypad Microphone', note: '' },
              { pn: 'GMMN4065', desc: 'Visor Microphone', note: '' },
              { pn: 'PMMN4098', desc: 'Desktop Microphone', note: '' },
            ]
          },
          {
            title: 'Microphone Accessories',
            items: [
              { pn: 'HLN9073', desc: 'Microphone Hang-Up Clip (requires installation)', note: '' },
              { pn: 'HLN9414', desc: 'Universal Microphone Hang-Up Clip (no installation required)', note: '' },
            ]
          },
        ]
      },
      ptt: {
        label: 'Vehicle PTT',
        icon: '',
        sections: [
          {
            title: 'Vehicle Remote PTT Solutions',
            items: [
              { pn: 'RLN4836', desc: 'Emergency Footswitch (use with Visor Mic GMMN4065)', note: '' },
              { pn: 'RLN4856', desc: 'Remote Mount Footswitch PTT', note: '' },
              { pn: 'RLN4857', desc: 'Remote Mount Pushbutton PTT', note: '' },
            ]
          },
        ]
      },
      mounting: {
        label: 'Installation & Mounting',
        icon: '',
        sections: [
          {
            title: 'Mounting Kits & Cables',
            items: [
              { pn: 'RLN6466',    desc: 'Low Profile Trunnion Kit', note: '' },
              { pn: 'RLN6467',    desc: 'High Profile Trunnion Kit', note: '' },
              { pn: 'RLN6468',    desc: 'Key Lock Trunnion Kit', note: '' },
              { pn: 'FTN6083',    desc: 'In-Dash Mounting Kit — DIN', note: '' },
              { pn: 'HKN4137',    desc: 'Power Cable to Battery — 10 ft, 15 amp, 14 AWG', note: '' },
              { pn: 'HKN4191',    desc: 'Power Cable to Battery — 10 ft, 20 amp, 12 AWG', note: '' },
              { pn: 'HKN4192',    desc: 'Power Cable to Battery — 20 ft, 20 amp, 10 AWG', note: '' },
              { pn: 'HKN9327',    desc: 'Ignition Sense Cable', note: '' },
              { pn: '3012045001', desc: 'Trunnion Mounting Screws', note: '' },
            ]
          },
        ]
      },
      speakers: {
        label: 'External Speakers',
        icon: '',
        sections: [
          {
            title: 'External Speakers',
            items: [
              { pn: 'HSN8145',  desc: '7.5W External Speaker', note: '' },
              { pn: 'RSN4001',  desc: '13W External Speaker', note: '' },
              { pn: 'GMKN4084', desc: 'Speaker Extension Cable', note: '' },
            ]
          },
        ]
      },
      cables: {
        label: 'Cables & Connectors',
        icon: '',
        sections: [
          {
            title: 'Cables and Connectors',
            items: [
              { pn: 'PMKN4147',   desc: 'Mobile Front Programming Cable', note: '' },
              { pn: 'PMKN4151',   desc: 'Mobile Rear Accessory Connector Universal Cable', note: '' },
              { pn: 'HLN9457',    desc: '16-Pin Accessory Connector Kit', note: '' },
              { pn: 'PMLN5620',   desc: 'Connector Extender, 20 pieces', note: '' },
              { pn: '3202607Y01', desc: 'Gasket, Cover, Accessory Connector', note: '' },
              { pn: '6680388A26', desc: 'Mobile Crimping Tool', note: '' },
            ]
          },
        ]
      },
      antennas: {
        label: 'Antennas',
        icon: '',
        sections: [
          {
            title: 'VHF Antennas',
            items: [
              { pn: 'HAD4006', desc: 'VHF 136-144 MHz, 1/4 Wave Roof Mount, Mini-U', note: '' },
              { pn: 'HAD4007', desc: 'VHF 144-150.8 MHz, 1/4 Wave Roof Mount, Mini-U', note: '' },
              { pn: 'HAD4008', desc: 'VHF 150.8-162 MHz, 1/4 Wave Roof Mount, Mini-U', note: '' },
              { pn: 'HAD4009', desc: 'VHF 162-174 MHz, 1/4 Wave Roof Mount, Mini-U', note: '' },
              { pn: 'HAD4022', desc: 'VHF 132-174 MHz, 3.0 dB Gain, Through-Hole Mount, Mini-U', note: '' },
            ]
          },
          {
            title: 'UHF Antennas',
            items: [
              { pn: 'HAE4002',    desc: 'UHF 403-430 MHz, 1/4 Wave Roof Mount, Mini-U', note: '' },
              { pn: 'HAE4003',    desc: 'UHF 450-470 MHz, 1/4 Wave Roof Mount, Mini-U', note: '' },
              { pn: 'HAE6022',    desc: 'UHF 403-527 MHz, 2 dB Gain, Through-Hole Mount, Mini-U', note: '' },
              { pn: 'RAE4004ARB', desc: 'UHF 445-470 MHz, 5 dB Gain, Roof Mount, Mini-U (with base)', note: '' },
            ]
          },
        ]
      },
    }
  },

};
const RADIOS = RADIOS_DATA;