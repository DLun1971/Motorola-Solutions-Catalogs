/* MOTOTRBO XPR Legacy — Product Data — xpr-legacy-data.js */

const RADIOS_DATA = {

  
  'xpr7000e': {
    name: 'XPR 7000e Series',
    sub: 'DMR Professional Portable',
    discontinued: true,
    tags: ['DMR Tier II/III', 'IP57 Rugged', 'IMPRES', 'Bluetooth', 'Wi-Fi'],
    tagStyles: ['', 'green', 'orange', '', ''],
    categories: {
      rsm: {
        cols: ["Part Number", "Description", "IMPRES", "IP Rating", "UL HazLoc", "Intel Audio", "Emg Btn", "Audio Jack", "Wires"],
        label: 'Remote Speaker Mics',
        icon: '',
        sections: [
          {
            title: 'Industrial Noise Canceling (INC) RSMs',
            items: [
              { pn: 'NNTN8383', desc: 'IMPRES INC RSM with 3.5mm Threaded Audio Jack (IP54)', note: 'Intelligent Audio with sw R2.2A+, 25% louder than standard RSMs, dual-mic noise suppression', checks: {impres: 1, ip: "IP54", ul: 0, intel: 1, emg: 0, jack: 1, wires: "\u2014"} },
              { pn: 'NNTN8382', desc: 'IMPRES INC RSM, Submersible (IP57)', note: 'Intelligent Audio with sw R2.2A+, dual-mic noise suppression, UL HazLoc', checks: {impres: 1, ip: "IP57", ul: 1, intel: 1, emg: 0, jack: 0, wires: "\u2014"} },
            ]
          },
          {
            title: 'Windporting & Noise-Canceling RSMs',
            items: [
              { pn: 'PMMN4024', desc: 'Windporting RSM with 3.5mm Audio Jack, Small (IP54)', note: 'Intelligent Audio', checks: {impres: 0, ip: "IP54", ul: 0, intel: 1, emg: 0, jack: 1, wires: "\u2014"} },
              { pn: 'PMMN4025', desc: 'IMPRES Windporting RSM with 3.5mm Audio Jack + Emergency Button, Small (IP54)', note: 'Intelligent Audio, UL HazLoc', checks: {impres: 1, ip: "IP54", ul: 1, intel: 1, emg: 1, jack: 1, wires: "\u2014"} },
              { pn: 'PMMN4040', desc: 'Windporting RSM, Small, Submersible (IP57)', note: 'Intelligent Audio, UL HazLoc', checks: {impres: 0, ip: "IP57", ul: 1, intel: 1, emg: 0, jack: 0, wires: "\u2014"} },
              { pn: 'PMMN4046', desc: 'IMPRES Windporting RSM with Volume Control, Emergency + Prog Button, Large, Submersible (IP57)', note: 'Intelligent Audio, UL HazLoc', checks: {impres: 1, ip: "IP57", ul: 1, intel: 1, emg: 1, jack: 0, wires: "\u2014"} },
              { pn: 'PMMN4050', desc: 'IMPRES Noise-Canceling RSM with 3.5mm Audio Jack, Large (IP54)', note: 'Intelligent Audio, UL HazLoc', checks: {impres: 1, ip: "IP54", ul: 1, intel: 1, emg: 0, jack: 1, wires: "\u2014"} },
            ]
          },
          {
            title: 'RSM Replacement Cord Kits',
            items: [
              { pn: 'RLN6074', desc: 'Replacement Coil Cord Kit', note: 'For PMMN4024 and PMMN4040', checks: {impres: 0, ip: "\u2014", ul: 0, intel: 0, emg: 0, jack: 0, wires: "\u2014"} },
              { pn: 'RLN6075', desc: 'Replacement Coil Cord Kit', note: 'For PMMN4025, PMMN4050, PMMN4046', checks: {impres: 0, ip: "\u2014", ul: 0, intel: 0, emg: 0, jack: 0, wires: "\u2014"} },
            ]
          },
          {
            title: 'RSM Accessories — Standard 3.5mm Jack',
            items: [
              { pn: 'AARLN4885', desc: 'Receive-Only Covered Earbud with Coiled Cord', note: 'UL HazLoc', checks: {impres: 0, ip: "\u2014", ul: 1, intel: 0, emg: 0, jack: 0, wires: "\u2014"} },
              { pn: 'RLN4941', desc: 'Receive-Only Earpiece with Translucent Tube and Rubber Eartip', note: 'UL HazLoc', checks: {impres: 0, ip: "\u2014", ul: 1, intel: 0, emg: 0, jack: 0, wires: "\u2014"} },
              { pn: 'WADN4190', desc: 'Receive-Only Flexible Earpiece', note: 'UL HazLoc', checks: {impres: 0, ip: "\u2014", ul: 1, intel: 0, emg: 0, jack: 0, wires: "\u2014"} },
              { pn: 'PMLN4620', desc: 'Receive-Only D-Shell Earpiece', note: 'UL HazLoc', checks: {impres: 0, ip: "\u2014", ul: 1, intel: 0, emg: 0, jack: 0, wires: "\u2014"} },
            ]
          },
          {
            title: 'RSM Accessories — Threaded 3.5mm (INC RSM NNTN8383)',
            items: [
              { pn: 'RLN5313', desc: 'One-Wire Earpiece with Clear Acoustic Tube, Black', note: '', checks: {impres: 0, ip: "\u2014", ul: 0, intel: 0, emg: 0, jack: 0, wires: "\u2014"} },
              { pn: 'RLN5314', desc: 'One-Wire Earpiece with Clear Acoustic Tube, Beige', note: '', checks: {impres: 0, ip: "\u2014", ul: 0, intel: 0, emg: 0, jack: 0, wires: "\u2014"} },
              { pn: 'BDN6664', desc: 'Receive-Only Earpiece, Beige', note: '', checks: {impres: 0, ip: "\u2014", ul: 0, intel: 0, emg: 0, jack: 0, wires: "\u2014"} },
              { pn: 'BDN6665', desc: 'Extra Loud Receive-Only Earpiece, Beige', note: '', checks: {impres: 0, ip: "\u2014", ul: 0, intel: 0, emg: 0, jack: 0, wires: "\u2014"} },
              { pn: 'BDN6726', desc: 'Receive-Only Earpiece, Black', note: '', checks: {impres: 0, ip: "\u2014", ul: 0, intel: 0, emg: 0, jack: 0, wires: "\u2014"} },
              { pn: 'BDN6727', desc: 'Extra Loud Receive-Only Earpiece, Black', note: '', checks: {impres: 0, ip: "\u2014", ul: 0, intel: 0, emg: 0, jack: 0, wires: "\u2014"} },
              { pn: 'BDN6666', desc: 'Receive-Only Earpiece with Volume Control, Beige', note: '', checks: {impres: 0, ip: "\u2014", ul: 0, intel: 0, emg: 0, jack: 0, wires: "\u2014"} },
              { pn: 'BDN6728', desc: 'Receive-Only Earpiece with Volume Control, Black', note: '', checks: {impres: 0, ip: "\u2014", ul: 0, intel: 0, emg: 0, jack: 0, wires: "\u2014"} },
              { pn: 'BDN6719', desc: 'Receive-Only Flexible Ear Receiver', note: '', checks: {impres: 0, ip: "\u2014", ul: 0, intel: 0, emg: 0, jack: 0, wires: "\u2014"} },
              { pn: 'BDN6781', desc: 'Receive-Only One-Wire Earbud, Black', note: '', checks: {impres: 0, ip: "\u2014", ul: 0, intel: 0, emg: 0, jack: 0, wires: "\u2014"} },
              { pn: 'RMN4056', desc: 'Receive-Only Dual-Muff Headband Headset', note: '', checks: {impres: 0, ip: "\u2014", ul: 0, intel: 0, emg: 0, jack: 0, wires: "\u2014"} },
              { pn: 'RMN4057', desc: 'Receive-Only Dual-Muff Hard Hat Headset', note: 'Mounts to hard hat slots', checks: {impres: 0, ip: "\u2014", ul: 0, intel: 0, emg: 0, jack: 0, wires: "\u2014"} },
            ]
          },
        ]
      },
      surveillance: {
        cols: ["Part Number", "Description", "IMPRES", "UL HazLoc", "Intel Audio", "Wires", "PTT", "Tube"],
        label: 'Surveillance & Earpieces',
        icon: '',
        sections: [
          {
            title: 'IMPRES Surveillance Kits',
            items: [
              { pn: 'PMLN6127', desc: 'IMPRES 2-Wire Surveillance Kit, Programmable Button, Black', note: 'Intelligent Audio', checks: {impres: 1, ul: 0, intel: 1, wires: "2", ptt: 0, tube: 0} },
              { pn: 'PMLN6128', desc: 'IMPRES 2-Wire Surveillance Kit, Programmable Button, Beige', note: 'Intelligent Audio', checks: {impres: 1, ul: 0, intel: 1, wires: "2", ptt: 0, tube: 0} },
              { pn: 'PMLN6129', desc: 'IMPRES 2-Wire Surveillance Kit with Translucent Tube, Programmable Button, Black', note: 'Intelligent Audio', checks: {impres: 1, ul: 0, intel: 1, wires: "2", ptt: 0, tube: 1} },
              { pn: 'PMLN6130', desc: 'IMPRES 2-Wire Surveillance Kit with Translucent Tube, Programmable Button, Beige', note: 'Intelligent Audio', checks: {impres: 1, ul: 0, intel: 1, wires: "2", ptt: 0, tube: 1} },
              { pn: 'PMLN6123', desc: 'IMPRES 3-Wire Surveillance Kit with Translucent Tube, Programmable Button, Black', note: 'Intelligent Audio', checks: {impres: 1, ul: 0, intel: 1, wires: "3", ptt: 0, tube: 1} },
              { pn: 'PMLN6124', desc: 'IMPRES 3-Wire Surveillance Kit with Translucent Tube, Programmable Button, Beige', note: 'Intelligent Audio', checks: {impres: 1, ul: 0, intel: 1, wires: "3", ptt: 0, tube: 1} },
              { pn: 'PMLN6125', desc: '1-Wire Receive-Only Earpiece, Black', note: '', checks: {impres: 0, ul: 0, intel: 0, wires: "1", ptt: 0, tube: 0} },
              { pn: 'PMLN6126', desc: '1-Wire Receive-Only Earpiece, Beige', note: '', checks: {impres: 0, ul: 0, intel: 0, wires: "1", ptt: 0, tube: 0} },
              { pn: 'NNTN8459', desc: '1-Wire Surveillance Kit with Translucent Tube, In-line Mic and PTT, Black', note: '', checks: {impres: 0, ul: 0, intel: 0, wires: "1", ptt: 1, tube: 1} },
            ]
          },
          {
            title: 'Surveillance Replacement Parts',
            items: [
              { pn: 'RLN6242', desc: 'Quick-Disconnect Translucent Tube (Low Noise Kit)', note: 'Combine with 5080384F72 foam plugs for high-noise kit', checks: {impres: 0, ul: 0, intel: 0, wires: "\u2014", ptt: 0, tube: 1} },
              { pn: '5080384F72', desc: 'Replacement Foam Plugs for RLN6242, 24dB NRR (pack of 25)', note: '', checks: {impres: 0, ul: 0, intel: 0, wires: "\u2014", ptt: 0, tube: 0} },
              { pn: 'RLN6282', desc: 'Replacement Standard Clear Rubber Eartip (pack of 50)', note: '', checks: {impres: 0, ul: 0, intel: 0, wires: "\u2014", ptt: 0, tube: 0} },
              { pn: 'RLN4760', desc: 'Small Clear Custom Earpiece, Right Ear', note: '', checks: {impres: 0, ul: 0, intel: 0, wires: "\u2014", ptt: 0, tube: 0} },
              { pn: 'RLN4761', desc: 'Medium Clear Custom Earpiece, Right Ear', note: '', checks: {impres: 0, ul: 0, intel: 0, wires: "\u2014", ptt: 0, tube: 0} },
              { pn: 'RLN4762', desc: 'Large Clear Custom Earpiece, Right Ear', note: '', checks: {impres: 0, ul: 0, intel: 0, wires: "\u2014", ptt: 0, tube: 0} },
              { pn: 'RLN4763', desc: 'Small Clear Custom Earpiece, Left Ear', note: '', checks: {impres: 0, ul: 0, intel: 0, wires: "\u2014", ptt: 0, tube: 0} },
              { pn: 'RLN4764', desc: 'Medium Clear Custom Earpiece, Left Ear', note: '', checks: {impres: 0, ul: 0, intel: 0, wires: "\u2014", ptt: 0, tube: 0} },
              { pn: 'RLN4765', desc: 'Large Clear Custom Earpiece, Left Ear', note: '', checks: {impres: 0, ul: 0, intel: 0, wires: "\u2014", ptt: 0, tube: 0} },
            ]
          },
        ]
      },
      wireless: {
        cols: ["Part Number", "Description", "UL HazLoc", "Intel Audio", "Op. Critical", "NRR", "PTT Pod"],
        label: 'Wireless / Bluetooth',
        icon: '',
        sections: [
          {
            title: 'XBT Heavy-Duty Wireless Headsets',
            items: [
              { pn: 'RLN6491', desc: 'XBT Heavy-Duty Wireless Over-the-Head Headset', note: '25dB NRR, Operations Critical Wireless', checks: {ul: 0, intel: 0, ocw: 1, nrr: "25dB", ptt: 0} },
              { pn: 'RLN6490', desc: 'XBT Heavy-Duty Wireless Behind-the-Head Headset', note: '23dB NRR, Operations Critical Wireless', checks: {ul: 0, intel: 0, ocw: 1, nrr: "23dB", ptt: 0} },
            ]
          },
          {
            title: 'Operations Critical Wireless Accessories',
            items: [
              { pn: 'NNTN8127', desc: 'Operations Critical Wireless Push-to-Talk Pod', note: 'UL HazLoc', checks: {ul: 1, intel: 0, ocw: 1, nrr: "\u2014", ptt: 0} },
              { pn: 'NNTN8125', desc: 'Operations Critical Wireless Earpiece, 12-inch Cable', note: 'Intelligent Audio, UL HazLoc', checks: {ul: 1, intel: 1, ocw: 1, nrr: "\u2014", ptt: 0} },
              { pn: 'NNTN8126', desc: 'Operations Critical Wireless Earpiece, 9.5-inch Cable', note: 'Intelligent Audio, UL HazLoc', checks: {ul: 1, intel: 1, ocw: 1, nrr: "\u2014", ptt: 0} },
              { pn: 'NNTN8294', desc: 'Operations Critical Wireless Earbud, 11.4-inch Cable', note: 'Intelligent Audio', checks: {ul: 0, intel: 1, ocw: 1, nrr: "\u2014", ptt: 0} },
              { pn: 'NNTN8295', desc: 'Operations Critical Wireless Earbud, 45.7-inch Cable', note: 'Intelligent Audio', checks: {ul: 0, intel: 1, ocw: 1, nrr: "\u2014", ptt: 0} },
              { pn: 'RLN6500', desc: 'Bluetooth Accessory Kit', note: 'Includes pod, earpiece, charging cradle', checks: {ul: 0, intel: 0, ocw: 0, nrr: "\u2014", ptt: 0} },
            ]
          },
          {
            title: 'Completely Discreet Kit',
            items: [
              { pn: 'RLN4922', desc: 'Completely Discreet Earpiece', note: 'Used with wireless PTT pod', checks: {ul: 0, intel: 0, ocw: 0, nrr: "\u2014", ptt: 1} },
              { pn: 'NNTN8385', desc: 'Y-Adapter for Wireless PTT Pod (NNTN8127)', note: '', checks: {ul: 0, intel: 0, ocw: 0, nrr: "\u2014", ptt: 1} },
              { pn: 'NNTN8457', desc: 'Neckloop Retention Hook Bulk Pack (10/pack)', note: '', checks: {ul: 0, intel: 0, ocw: 0, nrr: "\u2014", ptt: 0} },
            ]
          },
          {
            title: 'Wireless Replacement Parts',
            items: [
              { pn: 'NTN2572', desc: 'Replacement Wireless Earpiece, 12-inch Cable', note: '', checks: {ul: 0, intel: 0, ocw: 0, nrr: "\u2014", ptt: 0} },
              { pn: 'NTN2575', desc: 'Replacement Wireless Earpiece, 9.5-inch Cable', note: '', checks: {ul: 0, intel: 0, ocw: 0, nrr: "\u2014", ptt: 0} },
              { pn: 'NNTN8361A', desc: 'Replacement Eartips Kit for Operations Critical Wireless Earbuds', note: 'Includes small, medium, large eartips', checks: {ul: 0, intel: 0, ocw: 1, nrr: "\u2014", ptt: 0} },
              { pn: 'PMLN6246', desc: 'Replacement Swivel Clip for Wireless PTT Pod', note: '', checks: {ul: 0, intel: 0, ocw: 0, nrr: "\u2014", ptt: 1} },
            ]
          },
        ]
      },
      headsets: {
        cols: ["Part Number", "Description", "IMPRES", "IP Rating", "UL HazLoc", "Intel Audio", "Noise Cancel", "NRR", "PTT", "Bone Cond."],
        label: 'Headsets',
        icon: '',
        sections: [
          {
            title: 'Lightweight Headsets',
            items: [
              { pn: 'PMLN5102', desc: 'Ultra-Lite Behind-the-Head Headset, Single Muff, In-line PTT + Boom Mic', note: 'Intelligent Audio, UL HazLoc', checks: {impres: 0, ip: "\u2014", ul: 1, intel: 1, nc: 0, nrr: "\u2014", ptt: 1, bone: 0} },
              { pn: 'RMN5058', desc: 'Lightweight Over-the-Head Headset, Single Muff, In-line PTT + Boom Mic', note: 'Intelligent Audio, UL HazLoc', checks: {impres: 0, ip: "\u2014", ul: 1, intel: 1, nc: 0, nrr: "\u2014", ptt: 1, bone: 0} },
            ]
          },
          {
            title: 'Heavy Duty & Specialty Headsets',
            items: [
              { pn: 'PMLN5275', desc: 'Heavy-Duty Behind-the-Head Headset, Noise-Canceling Boom Mic, 24dB NRR', note: 'Intelligent Audio, UL HazLoc', checks: {impres: 0, ip: "\u2014", ul: 1, intel: 1, nc: 1, nrr: "24dB", ptt: 0, bone: 0} },
              { pn: 'PMLN5101', desc: 'IMPRES Temple Transducer with Boom Mic and In-line PTT', note: 'Bone-conduction, Intelligent Audio, UL HazLoc', checks: {impres: 1, ip: "\u2014", ul: 1, intel: 1, nc: 0, nrr: "\u2014", ptt: 1, bone: 1} },
              { pn: 'PMLN5096', desc: 'D-Style Earset with In-line PTT', note: 'Intelligent Audio, UL HazLoc', checks: {impres: 0, ip: "\u2014", ul: 1, intel: 1, nc: 0, nrr: "\u2014", ptt: 1, bone: 0} },
            ]
          },
        ]
      },
      batteries: {
        cols: ["Part Number", "Description", "IMPRES", "Capacity", "IP Rating", "UL HazLoc"],
        label: 'Batteries',
        icon: '',
        sections: [
          {
            title: 'IMPRES Li-Ion Batteries',
            items: [
              { pn: 'PMNN4407', desc: 'IMPRES Slim Li-Ion 1500mAh Battery, Submersible (IP57)', note: '', checks: {impres: 1, mah: "1500", ip: "IP57", ul: 0} },
              { pn: 'PMNN4409', desc: 'IMPRES High-Capacity Li-Ion 2150mAh Battery, Submersible (IP57)', note: '', checks: {impres: 1, mah: "2150", ip: "IP57", ul: 0} },
              { pn: 'PMNN4448', desc: 'IMPRES High-Capacity Li-Ion 2700mAh Battery, Submersible (IP57)', note: '', checks: {impres: 1, mah: "2700", ip: "IP57", ul: 0} },
              { pn: 'NNTN8129', desc: 'IMPRES High-Cap Li-Ion 2300mAh Battery, Submersible (IP57)', note: 'UL HazLoc (FM Intrinsically Safe)', checks: {impres: 1, mah: "2300", ip: "IP57", ul: 1} },
              { pn: 'PMNN4435', desc: 'Lithium Manganese 1300mAh Battery, Submersible (IP57)', note: '-30°C rated, for extreme cold', checks: {impres: 0, mah: "1300", ip: "IP57", ul: 0} },
            ]
          },
        ]
      },
      chargers: {
        cols: ["Part Number", "Description", "IMPRES", "Pockets", "Display"],
        label: 'Chargers',
        icon: '',
        sections: [
          {
            title: 'Single-Unit Chargers',
            items: [
              { pn: 'WPLN4232', desc: 'IMPRES Single-Unit Rapid Rate Charger, 120V (US Plug)', note: 'IMPRES', checks: {impres: 1, pockets: "1", display: 0} },
              { pn: 'NNTN8525A', desc: 'Travel Charger, Rapid Rate with Mounting Bracket', note: '', checks: {impres: 0, pockets: "1", display: 0} },
            ]
          },
          {
            title: 'Multi-Unit Chargers',
            items: [
              { pn: 'WPLN4212', desc: 'IMPRES Multi-Unit Rapid Rate Charger, 120V (US Plug)', note: 'IMPRES, 6-pocket', checks: {impres: 1, pockets: "6", display: 0} },
              { pn: 'WPLN4219', desc: 'IMPRES Multi-Unit Rapid Rate Charger with Displays, 120V (US Plug)', note: 'IMPRES, 6-pocket, battery status per pocket', checks: {impres: 1, pockets: "6", display: 1} },
            ]
          },
          {
            title: 'Vehicular Charger',
            items: [
              { pn: 'NNTN7616C', desc: 'IMPRES Single-Unit Rapid Rate Vehicular Charger', note: 'IMPRES, 12VDC hardwire — must be C revision or later', checks: {impres: 1, pockets: "1", display: 0} },
            ]
          },
          {
            title: 'Battery Management Tools',
            items: [
              { pn: 'NNTN7392', desc: 'IMPRES Battery Reader', note: 'Handheld battery status reader', checks: {impres: 1, pockets: "1", display: 0} },
              { pn: 'NNTN7676', desc: 'IMPRES Battery Fleet Management Software', note: '', checks: {impres: 1, pockets: "1", display: 0} },
              { pn: 'HKVN4036', desc: 'IMPRES Battery Fleet Management License Key', note: '', checks: {impres: 1, pockets: "1", display: 0} },
              { pn: 'NNTN7677', desc: 'IMPRES Battery Fleet Management Multi-Unit Charger Interface Unit', note: '', checks: {impres: 1, pockets: "1", display: 0} },
              { pn: 'NNTN8045', desc: 'IMPRES Battery Fleet Management Single-Unit Charger Interface Unit', note: '', checks: {impres: 1, pockets: "1", display: 0} },
              { pn: 'NLN7967', desc: 'Wall Mount Bracket for IMPRES Multi-Unit Charger', note: '', checks: {impres: 1, pockets: "1", display: 0} },
              { pn: 'RLN5382', desc: 'Display Module for IMPRES Multi-Unit Charger', note: '', checks: {impres: 1, pockets: "1", display: 1} },
            ]
          },
        ]
      },
      carry: {
        label: 'Carry Solutions',
        icon: '',
        sections: [
          {
            title: 'Leather & Nylon Cases',
            items: [
              { pn: 'PMLN5838', desc: 'Hard Leather Case with 3-inch Fixed Belt Loop, Full Keypad', note: '' },
              { pn: 'PMLN5839', desc: 'Hard Leather Case with 3-inch Fixed Belt Loop, No Display', note: '' },
              { pn: 'PMLN5840', desc: 'Hard Leather Case with 3-inch Swivel Belt Loop, Full Keypad', note: '' },
              { pn: 'PMLN5846', desc: 'Hard Leather Case with 3-inch Swivel Belt Loop, No Display', note: '' },
              { pn: 'PMLN5842', desc: 'Hard Leather Case with 2.5-inch Swivel Belt Loop, Full Keypad', note: '' },
              { pn: 'PMLN5843', desc: 'Hard Leather Case with 2.5-inch Swivel Belt Loop, No Display', note: '' },
              { pn: 'PMLN5844', desc: 'Nylon Case with 3-inch Fixed Belt Loop, Full Keypad', note: '' },
              { pn: 'PMLN5845', desc: 'Nylon Case with 3-inch Fixed Belt Loop, No Display', note: '' },
              { pn: 'PMLN5610', desc: 'Replacement 2.5-inch Leather Swivel Belt Loop', note: '' },
              { pn: 'PMLN5611', desc: 'Replacement 3-inch Leather Swivel Belt Loop', note: '' },
              { pn: 'PMLN7008', desc: '2.5-inch Belt Clip', note: '' },
              { pn: 'PMLN4651', desc: '2-inch Belt Clip', note: '' },
            ]
          },
          {
            title: 'Straps, Packs & Accessories',
            items: [
              { pn: 'NTN5243', desc: 'Adjustable Nylon Carrying Strap', note: '' },
              { pn: 'HLN6602', desc: 'Universal Chest Pack with Radio Holder, Pen Holder, Velcro Pouch', note: '' },
              { pn: 'RLN4570', desc: 'Break-Away Chest Pack', note: '' },
              { pn: 'RLN4815', desc: 'Radio Pack Utility Case', note: '' },
              { pn: 'HLN9985', desc: 'Waterproof Bag', note: '' },
              { pn: 'RLN4295', desc: 'Black Leather Epaulet Strap with Clip', note: 'Secures RSM to shoulder' },
              { pn: '4200865599', desc: '1.75-inch Wide Leather Belt', note: '' },
              { pn: 'PMLN6066', desc: 'Accessory Connector Dust Cover', note: '' },
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
              { pn: 'PMAE4079', desc: 'UHF Wideband Slim Whip Antenna (403-527 MHz), 15cm', note: 'UL HazLoc' },
              { pn: 'PMAE4069', desc: 'UHF Stubby Antenna (403-450 MHz), 11cm', note: 'UL HazLoc' },
              { pn: 'PMAE4070', desc: 'UHF Stubby Antenna (440-490 MHz), 11cm', note: 'UL HazLoc' },
              { pn: 'PMAE4071', desc: 'UHF Stubby Antenna (470-527 MHz), 11cm', note: 'UL HazLoc' },
            ]
          },
          {
            title: 'VHF Antennas',
            items: [
              { pn: 'PMAD4117', desc: 'VHF Helical Antenna (136-155 MHz), 15cm', note: 'UL HazLoc' },
              { pn: 'PMAD4116', desc: 'VHF Helical Antenna (144-165 MHz), 15cm', note: 'UL HazLoc' },
              { pn: 'PMAD4118', desc: 'VHF Helical Antenna (152-174 MHz), 15cm', note: 'UL HazLoc' },
              { pn: 'PMAD4119', desc: 'VHF Stubby Antenna (136-148 MHz), 9cm', note: 'UL HazLoc' },
              { pn: 'PMAD4120', desc: 'VHF Stubby Antenna (146-160 MHz), 9cm', note: 'UL HazLoc' },
            ]
          },
          {
            title: '800/900 MHz Antennas',
            items: [
              { pn: 'PMAF4011', desc: '800/900 Whip Antenna (806-870 MHz), 16cm', note: '' },
              { pn: 'PMAF4012', desc: '800/900 Whip Antenna (896-941 MHz), 14cm', note: '' },
              { pn: 'PMAF4009', desc: '800/900 Short Whip Antenna (806-870 MHz), 12cm', note: '' },
              { pn: 'PMAF4010', desc: '800/900 Short Whip Antenna (896-941 MHz), 11cm', note: '' },
            ]
          },
          {
            title: 'Antenna ID Bands',
            items: [
              { pn: '32012144001', desc: 'Gray Antenna ID Bands (pack of 10)', note: '' },
              { pn: '32012144002', desc: 'Yellow Antenna ID Bands (pack of 10)', note: '' },
              { pn: '32012144003', desc: 'Green Antenna ID Bands (pack of 10)', note: '' },
              { pn: '32012144004', desc: 'Blue Antenna ID Bands (pack of 10)', note: '' },
              { pn: '32012144005', desc: 'Purple Antenna ID Bands (pack of 10)', note: '' },
            ]
          },
        ]
      },
      cables: {
        label: 'Cables & Programming',
        icon: '',
        sections: [
          {
            title: 'Programming Cables',
            items: [
              { pn: 'PMKN4012B', desc: 'Portable Programming Cable', note: 'Must be B revision for XPR 7000 series' },
              { pn: 'PMKN4013', desc: 'Programming, Test and Alignment Cable', note: '' },
              { pn: 'PMKN4040', desc: 'Portable Telemetry Cable', note: '' },
              { pn: 'PMKN4071', desc: 'Portable to RS232 DB25M Connector Cable', note: '' },
            ]
          },
        ]
      },
    }
  },

  // ── XPR 3000e PORTABLES ────────────────────────────────────────────────────
  'xpr3000e': {
    name: 'XPR 3000e Series',
    sub: 'DMR Entry-Level Portable',
    tags: ['DMR Tier II', 'IP54/IP57', 'IMPRES', 'Digital + Analog'],
    tagStyles: ['', 'green', 'orange', ''],
    categories: {
      rsm: {
        cols: ["Part Number", "Description", "IMPRES", "IP Rating", "UL HazLoc", "Intel Audio", "Emg Btn", "Audio Jack", "Wires"],
        label: 'Remote Speaker Mics',
        icon: '',
        sections: [
          {
            title: 'IMPRES & Standard RSMs',
            items: [
              { pn: 'PMMN4071', desc: 'IMPRES Noise-Canceling RSM with 3.5mm Audio Jack, Large (IP54)', note: 'Intelligent Audio', checks: {impres: 1, ip: "IP54", ul: 0, intel: 1, emg: 0, jack: 1, wires: "\u2014"} },
              { pn: 'PMMN4073', desc: 'IMPRES Windporting RSM with 3.5mm Audio Jack, Small (IP55)', note: 'Intelligent Audio', checks: {impres: 1, ip: "IP55", ul: 0, intel: 1, emg: 0, jack: 1, wires: "\u2014"} },
              { pn: 'PMMN4075', desc: 'Windporting RSM, Small, Submersible (IP57)', note: 'Intelligent Audio', checks: {impres: 0, ip: "IP57", ul: 0, intel: 1, emg: 0, jack: 0, wires: "\u2014"} },
              { pn: 'PMMN4076', desc: 'Windporting RSM with 3.5mm Audio Jack, Small (IP54)', note: '', checks: {impres: 0, ip: "IP54", ul: 0, intel: 0, emg: 0, jack: 1, wires: "\u2014"} },
            ]
          },
          {
            title: 'RSM Accessories — 3.5mm Jack',
            items: [
              { pn: 'AARLN4885', desc: 'Receive-Only Covered Earbud with Coiled Cord', note: '', checks: {impres: 0, ip: "\u2014", ul: 0, intel: 0, emg: 0, jack: 0, wires: "\u2014"} },
              { pn: 'RLN4941', desc: 'Receive-Only Earpiece with Translucent Tube and Rubber Eartip', note: '', checks: {impres: 0, ip: "\u2014", ul: 0, intel: 0, emg: 0, jack: 0, wires: "\u2014"} },
              { pn: 'WADN4190', desc: 'Receive-Only Flexible Earpiece', note: '', checks: {impres: 0, ip: "\u2014", ul: 0, intel: 0, emg: 0, jack: 0, wires: "\u2014"} },
              { pn: 'PMLN4620', desc: 'Receive-Only D-Shell Earpiece', note: '', checks: {impres: 0, ip: "\u2014", ul: 0, intel: 0, emg: 0, jack: 0, wires: "\u2014"} },
            ]
          },
        ]
      },
      surveillance: {
        cols: ["Part Number", "Description", "IMPRES", "UL HazLoc", "Intel Audio", "Wires", "PTT", "Tube"],
        label: 'Surveillance & Earpieces',
        icon: '',
        sections: [
          {
            title: 'Surveillance Kits',
            items: [
              { pn: 'PMLN5724', desc: '2-Wire Surveillance Kit with Translucent Tube, Black', note: 'Intelligent Audio', checks: {impres: 0, ul: 0, intel: 1, wires: "2", ptt: 0, tube: 1} },
              { pn: 'PMLN5726', desc: '2-Wire Surveillance Kit with Translucent Tube, Beige', note: 'Intelligent Audio', checks: {impres: 0, ul: 0, intel: 1, wires: "2", ptt: 0, tube: 1} },
            ]
          },
          {
            title: 'Mag One Earpieces',
            items: [
              { pn: 'PMLN5727', desc: 'Mag One Swivel Earpiece with In-line Mic and PTT', note: 'Over-the-ear', checks: {impres: 0, ul: 0, intel: 0, wires: "\u2014", ptt: 1, tube: 0} },
              { pn: 'PMLN5733', desc: 'Mag One Earbud with In-line Mic and PTT', note: 'Earbud style', checks: {impres: 0, ul: 0, intel: 0, wires: "\u2014", ptt: 1, tube: 0} },
            ]
          },
          {
            title: 'Surveillance Replacement Parts',
            items: [
              { pn: 'HKLN4478', desc: 'Replacement Quick-Disconnect Translucent Tube with Clear Rubber Eartip', note: '', checks: {impres: 0, ul: 0, intel: 0, wires: "\u2014", ptt: 0, tube: 1} },
              { pn: '67009254001', desc: 'Replacement Standard Clear Rubber Eartip (pack of 10)', note: '', checks: {impres: 0, ul: 0, intel: 0, wires: "\u2014", ptt: 0, tube: 0} },
            ]
          },
        ]
      },
      headsets: {
        cols: ["Part Number", "Description", "IMPRES", "IP Rating", "UL HazLoc", "Intel Audio", "Noise Cancel", "NRR", "PTT", "Bone Cond."],
        label: 'Headsets',
        icon: '',
        sections: [
          {
            title: 'Headsets',
            items: [
              { pn: 'PMLN5731', desc: 'Over-the-Head Heavy-Duty Headset with Boom Mic, In-line PTT, 24dB NRR', note: '', checks: {impres: 0, ip: "\u2014", ul: 0, intel: 0, nc: 0, nrr: "24dB", ptt: 1, bone: 0} },
              { pn: 'PMLN6635', desc: 'Lightweight Over-the-Head Headset, Single Muff, In-line PTT + Boom Mic', note: '', checks: {impres: 0, ip: "\u2014", ul: 0, intel: 0, nc: 0, nrr: "\u2014", ptt: 1, bone: 0} },
              { pn: 'PMLN5732', desc: 'Mag One Earset with Boom Mic and In-line PTT', note: 'Earset style', checks: {impres: 0, ip: "\u2014", ul: 0, intel: 0, nc: 0, nrr: "\u2014", ptt: 1, bone: 0} },
            ]
          },
        ]
      },
      batteries: {
        cols: ["Part Number", "Description", "IMPRES", "Capacity", "IP Rating", "UL HazLoc"],
        label: 'Batteries',
        icon: '',
        sections: [
          {
            title: 'IMPRES & Standard Batteries',
            items: [
              { pn: 'PMNN4407', desc: 'IMPRES Slim Li-Ion 1500mAh Battery', note: '', checks: {impres: 1, mah: "1500", ip: "\u2014", ul: 0} },
              { pn: 'PMNN4409', desc: 'IMPRES High-Capacity Li-Ion 2150mAh Battery', note: '', checks: {impres: 1, mah: "2150", ip: "\u2014", ul: 0} },
              { pn: 'PMNN4406', desc: 'Slim Li-Ion 1500mAh Battery (Non-IMPRES)', note: '', checks: {impres: 1, mah: "1500", ip: "\u2014", ul: 0} },
            ]
          },
        ]
      },
      chargers: {
        cols: ["Part Number", "Description", "IMPRES", "Pockets", "Display"],
        label: 'Chargers',
        icon: '',
        sections: [
          {
            title: 'Single-Unit Chargers',
            items: [
              { pn: 'NNTN8275', desc: 'Single-Unit Charger, 120V', note: '', checks: {impres: 0, pockets: "1", display: 0} },
              { pn: 'WPLN4232', desc: 'IMPRES Single-Unit Charger, 120V', note: 'IMPRES', checks: {impres: 1, pockets: "1", display: 0} },
              { pn: 'NNTN8525', desc: 'Travel Charger, Rapid Rate with Mounting Bracket', note: '', checks: {impres: 0, pockets: "1", display: 0} },
            ]
          },
          {
            title: 'Multi-Unit Chargers',
            items: [
              { pn: 'WPLN4212', desc: 'IMPRES Multi-Unit Charger, 120V (US Plug)', note: 'IMPRES, 6-pocket', checks: {impres: 1, pockets: "6", display: 0} },
              { pn: 'WPLN4219', desc: 'IMPRES Multi-Unit Charger with Displays, 120V (US Plug)', note: 'IMPRES, 6-pocket, per-pocket status', checks: {impres: 1, pockets: "6", display: 1} },
            ]
          },
          {
            title: 'Vehicular Charger',
            items: [
              { pn: 'NNTN7616C', desc: 'IMPRES Single-Unit Rapid Rate Vehicular Charger', note: 'IMPRES — must be C revision or later', checks: {impres: 1, pockets: "1", display: 0} },
            ]
          },
          {
            title: 'Battery Management Tools',
            items: [
              { pn: 'NNTN7676', desc: 'IMPRES Battery Fleet Management Software', note: '', checks: {impres: 1, pockets: "1", display: 0} },
              { pn: 'NNTN7677', desc: 'Multi-Unit Charger Interface Unit for IMPRES Battery Fleet Management', note: '', checks: {impres: 1, pockets: "1", display: 0} },
              { pn: 'NNTN8045', desc: 'Single-Unit Charger Interface Unit for IMPRES Battery Fleet Management', note: '', checks: {impres: 1, pockets: "1", display: 0} },
              { pn: 'HKVN4036', desc: 'IMPRES Battery Fleet Management License Key', note: '', checks: {impres: 1, pockets: "1", display: 0} },
              { pn: 'NNTN7392', desc: 'IMPRES Battery Reader', note: '', checks: {impres: 1, pockets: "1", display: 0} },
              { pn: 'NLN7967', desc: 'Wall Mount Bracket for Multi-Unit Charger', note: '', checks: {impres: 0, pockets: "1", display: 0} },
              { pn: 'RLN5382', desc: 'Display Module for IMPRES Multi-Unit Charger', note: '', checks: {impres: 1, pockets: "1", display: 1} },
            ]
          },
        ]
      },
      carry: {
        label: 'Carry Solutions',
        icon: '',
        sections: [
          {
            title: 'Leather & Nylon Cases',
            items: [
              { pn: 'PMLN5863', desc: 'Hard Leather Case with 3-inch Fixed Belt Loop, Limited Keypad', note: '' },
              { pn: 'PMLN5864', desc: 'Hard Leather Case with 3-inch Fixed Belt Loop, No Display', note: '' },
              { pn: 'PMLN5865', desc: 'Hard Leather Case with 3-inch Swivel Belt Loop, Limited Keypad', note: '' },
              { pn: 'PMLN5866', desc: 'Hard Leather Case with 3-inch Swivel Belt Loop, No Display', note: '' },
              { pn: 'PMLN5867', desc: 'Hard Leather Case with 2.5-inch Swivel Belt Loop, Limited Keypad', note: '' },
              { pn: 'PMLN5868', desc: 'Hard Leather Case with 2.5-inch Swivel Belt Loop, No Display', note: '' },
              { pn: 'PMLN5869', desc: 'Nylon Case with 3-inch Fixed Belt Loop, Limited Keypad', note: '' },
              { pn: 'PMLN5870', desc: 'Nylon Case with 3-inch Fixed Belt Loop, No Display', note: '' },
              { pn: 'PMLN5610', desc: 'Replacement 2.5-inch Swivel Belt Loop', note: '' },
              { pn: 'PMLN5611', desc: 'Replacement 3-inch Swivel Belt Loop', note: '' },
              { pn: 'PMLN4651', desc: '2-inch Belt Clip', note: '' },
              { pn: 'PMLN7008', desc: '2.5-inch Belt Clip', note: '' },
            ]
          },
          {
            title: 'Straps, Packs & Accessories',
            items: [
              { pn: 'NTN5243', desc: 'Adjustable Carrying Strap', note: '' },
              { pn: 'HLN6602', desc: 'Universal Chest Pack', note: '' },
              { pn: 'RLN4570', desc: 'Break-Away Chest Pack', note: '' },
              { pn: 'RLN4815', desc: 'Radio Pack Utility Case', note: '' },
              { pn: 'HLN9985', desc: 'Waterproof Bag', note: '' },
              { pn: 'RLN4295', desc: 'Epaulet Strap', note: '' },
              { pn: 'PMLN6066', desc: 'Accessory Connector Dust Cover', note: '' },
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
              { pn: 'PMAE4079', desc: 'UHF Wideband Whip Antenna (403-512 MHz)', note: '' },
              { pn: 'PMAE4069', desc: 'UHF Stubby Antenna (403-450 MHz)', note: '' },
              { pn: 'PMAE4070', desc: 'UHF Stubby Antenna (440-490 MHz)', note: '' },
              { pn: 'PMAE4071', desc: 'UHF Stubby Antenna (470-527 MHz)', note: '' },
            ]
          },
          {
            title: 'VHF Antennas',
            items: [
              { pn: 'PMAD4117', desc: 'VHF Helical Antenna (136-155 MHz)', note: '' },
              { pn: 'PMAD4116', desc: 'VHF Helical Antenna (144-165 MHz)', note: '' },
              { pn: 'PMAD4118', desc: 'VHF Helical Antenna (152-174 MHz)', note: '' },
              { pn: 'PMAD4119', desc: 'VHF Stubby Antenna (136-148 MHz)', note: '' },
              { pn: 'PMAD4120', desc: 'VHF Stubby Antenna (146-160 MHz)', note: '' },
            ]
          },
          {
            title: 'Antenna ID Bands',
            items: [
              { pn: '32012144001', desc: 'Gray Antenna ID Bands (pack of 10)', note: '' },
              { pn: '32012144002', desc: 'Yellow Antenna ID Bands (pack of 10)', note: '' },
              { pn: '32012144003', desc: 'Green Antenna ID Bands (pack of 10)', note: '' },
              { pn: '32012144004', desc: 'Blue Antenna ID Bands (pack of 10)', note: '' },
              { pn: '32012144005', desc: 'Purple Antenna ID Bands (pack of 10)', note: '' },
            ]
          },
        ]
      },
      cables: {
        label: 'Cables & Programming',
        icon: '',
        sections: [
          {
            title: 'Programming Cables',
            items: [
              { pn: 'PMKN4115', desc: 'Portable Programming Cable', note: '' },
              { pn: 'PMKN4117', desc: 'Programming, Test and Alignment Cable', note: '' },
            ]
          },
        ]
      },
    }
  },

  // ── XPR 5000e MOBILE ──────────────────────────────────────────────────────
  'xpr5000e': {
    name: 'XPR 5000e Series',
    sub: 'DMR Professional Mobile',
    tags: ['DMR Tier II/III', 'IP54 Rugged', 'IMPRES', 'Bluetooth', 'Wi-Fi', 'GPS'],
    tagStyles: ['', 'green', 'orange', '', '', ''],
    categories: {
      microphones: {
        label: 'Mobile Microphones',
        icon: '',
        sections: [
          {
            title: 'IMPRES & Standard Microphones',
            items: [
              { pn: 'RMN5127', desc: 'IMPRES Keypad Microphone with 4-Way Navigation', note: 'XPR 5550e only — full keypad, large color display navigation' },
              { pn: 'RMN5052', desc: 'Standard Compact Microphone', note: 'Intelligent Audio' },
              { pn: 'RMN5053', desc: 'IMPRES Heavy-Duty Microphone', note: 'Intelligent Audio — easy to use with gloves' },
              { pn: 'HMN4098', desc: 'IMPRES Telephone-Style Handset', note: 'Intelligent Audio' },
              { pn: 'RMN5054', desc: 'IMPRES Visor Microphone', note: 'Intelligent Audio' },
              { pn: 'RMN5050', desc: 'Desktop Microphone', note: 'Intelligent Audio — for control station use' },
            ]
          },
          {
            title: 'Microphone Extension Cables & Accessories',
            items: [
              { pn: 'PMKN4033', desc: 'Microphone Extension Cable, 10 feet', note: '' },
              { pn: 'PMKN4034', desc: 'Microphone Extension Cable, 20 feet', note: '' },
              { pn: 'HLN9073', desc: 'Microphone Hang-Up Clip', note: '' },
              { pn: 'HLN9414', desc: 'Universal Microphone Hang-Up Clip', note: '' },
            ]
          },
        ]
      },
      wireless: {
        cols: ["Part Number", "Description", "UL HazLoc", "Intel Audio", "Op. Critical", "NRR", "PTT Pod"],
        label: 'Wireless / Bluetooth',
        icon: '',
        sections: [
          {
            title: 'Operations Critical Wireless Accessories',
            items: [
              { pn: 'NNTN8125', desc: 'Operations Critical Wireless Earpiece, 12-inch Cable', note: 'Intelligent Audio, UL HazLoc', checks: {ul: 1, intel: 1, ocw: 1, nrr: "\u2014", ptt: 0} },
              { pn: 'NNTN8294', desc: 'Operations Critical Wireless Earbud, 11.4-inch Cable', note: 'Requires NNTN8127 pod', checks: {ul: 0, intel: 0, ocw: 1, nrr: "\u2014", ptt: 0} },
              { pn: 'NNTN8295', desc: 'Operations Critical Wireless Earbud, 45.7-inch Cable', note: 'Requires NNTN8127 pod', checks: {ul: 0, intel: 0, ocw: 1, nrr: "\u2014", ptt: 0} },
              { pn: 'NNTN8127', desc: 'Wireless Push-to-Talk Pod', note: '', checks: {ul: 0, intel: 0, ocw: 0, nrr: "\u2014", ptt: 0} },
              { pn: 'PMLN7052', desc: 'Operations Critical Wireless 1-Wire Surveillance Earpiece', note: '', checks: {ul: 0, intel: 0, ocw: 1, nrr: "\u2014", ptt: 0} },
              { pn: 'RLN6490', desc: 'XBT Operations Critical Wireless Behind-the-Neck Heavy-Duty Headset', note: '', checks: {ul: 0, intel: 0, ocw: 1, nrr: "\u2014", ptt: 0} },
              { pn: 'RLN6491', desc: 'XBT Operations Critical Wireless Headband-Style Heavy-Duty Headset', note: '', checks: {ul: 0, intel: 0, ocw: 1, nrr: "\u2014", ptt: 0} },
              { pn: 'RLN6500', desc: 'MOTOTRBO Bluetooth Accessory Kit', note: 'Includes pod, swivel earpiece, charging cradle + US power supply', checks: {ul: 0, intel: 0, ocw: 0, nrr: "\u2014", ptt: 0} },
              { pn: 'PMLN6462', desc: 'Boom Microphone Earpiece Multi-Pack (3-pack) for Bluetooth Accessory Kit', note: '', checks: {ul: 0, intel: 0, ocw: 0, nrr: "\u2014", ptt: 0} },
            ]
          },
          {
            title: 'Long Range Wireless Mobile RSM Kit',
            items: [
              { pn: 'RLN6551', desc: 'Long Range Wireless Mobile Accessory Kit with Vehicular Charger', note: 'Includes RLN6544 RSM, PMMN4097 BT Gateway, PMLN6716 Vehicular Charger', checks: {ul: 0, intel: 0, ocw: 0, nrr: "\u2014", ptt: 0} },
              { pn: 'RLN6552', desc: 'Long Range Wireless Mobile Accessory Kit (No Charger)', note: 'Includes RLN6544 RSM and PMMN4097 BT Gateway', checks: {ul: 0, intel: 0, ocw: 0, nrr: "\u2014", ptt: 0} },
              { pn: 'PMMN4097', desc: 'Mobile Microphone with Bluetooth Gateway', note: 'Provides up to 100m range for long-range wireless RSM', checks: {ul: 0, intel: 0, ocw: 0, nrr: "\u2014", ptt: 0} },
              { pn: 'RLN6544', desc: 'Long Range Wireless RSM with Battery and Clip', note: 'Up to 100m range', checks: {ul: 0, intel: 0, ocw: 0, nrr: "\u2014", ptt: 0} },
              { pn: 'PMNN4461', desc: 'Wireless RSM Battery, 1750mAh Li-Ion', note: '', checks: {ul: 0, intel: 0, ocw: 0, nrr: "\u2014", ptt: 0} },
              { pn: 'PMLN7120', desc: 'Wireless RSM Dual-Unit Charger with NA Power Supply', note: '', checks: {ul: 0, intel: 0, ocw: 0, nrr: "\u2014", ptt: 0} },
              { pn: 'PMLN6716', desc: 'Wireless RSM Vehicular Charger', note: '', checks: {ul: 0, intel: 0, ocw: 0, nrr: "\u2014", ptt: 0} },
              { pn: 'PMLN6743', desc: 'Swivel Clip for Long Range Wireless RSM', note: '', checks: {ul: 0, intel: 0, ocw: 0, nrr: "\u2014", ptt: 0} },
              { pn: '42009312001', desc: 'D-Ring Swivel Clip', note: '', checks: {ul: 0, intel: 0, ocw: 0, nrr: "\u2014", ptt: 0} },
              { pn: 'RLN4941', desc: 'Receive-Only Earpiece with Translucent Tube and Rubber Eartip', note: 'For use with long-range wireless RSM', checks: {ul: 0, intel: 0, ocw: 0, nrr: "\u2014", ptt: 0} },
              { pn: 'AARLN4885', desc: 'Receive-Only Earbud', note: 'For use with long-range wireless RSM', checks: {ul: 0, intel: 0, ocw: 0, nrr: "\u2014", ptt: 0} },
            ]
          },
          {
            title: 'Wireless Replacement Parts',
            items: [
              { pn: 'NTN2572', desc: 'Replacement Wireless Earpiece, 12-inch Cable', note: '', checks: {ul: 0, intel: 0, ocw: 0, nrr: "\u2014", ptt: 0} },
              { pn: 'NTN2575', desc: 'Replacement Wireless Earpiece, 9.5-inch Cable', note: '', checks: {ul: 0, intel: 0, ocw: 0, nrr: "\u2014", ptt: 0} },
              { pn: 'NTN8821', desc: 'Maintenance Kit (10 silicone ear tubes, 10 mic seal strips, 2 foam windscreens)', note: '', checks: {ul: 0, intel: 0, ocw: 0, nrr: "\u2014", ptt: 0} },
              { pn: 'NNTN8361', desc: 'Replacement Eartips Kit (small/medium/large + clips)', note: 'For Operations Critical Wireless Earbuds', checks: {ul: 0, intel: 0, ocw: 1, nrr: "\u2014", ptt: 0} },
              { pn: 'PMLN6246', desc: 'Swivel Clip for Wireless PTT Pod', note: '', checks: {ul: 0, intel: 0, ocw: 0, nrr: "\u2014", ptt: 1} },
              { pn: 'PMLN6397', desc: 'Replacement Swivel Earpieces for RLN6500 Bluetooth Kit (pack of 3)', note: '', checks: {ul: 0, intel: 0, ocw: 0, nrr: "\u2014", ptt: 0} },
            ]
          },
        ]
      },
      handheld_control: {
        label: 'Handheld Control Head',
        icon: '',
        sections: [
          {
            title: 'Handheld Control Head',
            items: [
              { pn: 'PMLN7131', desc: 'MOTOTRBO Handheld Control Head Kit', note: 'Includes Control Head, Radio Adapter, and Coiled Cable' },
              { pn: 'PMKN4173', desc: 'Replacement Coiled Cable, 3 meters', note: '' },
              { pn: 'PMKN4174', desc: 'Extension Cable, Straight, 5 meters', note: '' },
              { pn: '30009477001', desc: 'Programming Cable', note: '' },
            ]
          },
        ]
      },
      external_speakers: {
        label: 'Speakers & Control Station',
        icon: '',
        sections: [
          {
            title: 'External Speakers',
            items: [
              { pn: 'RSN4002', desc: '13W External Speaker', note: 'For extreme-noise environments' },
              { pn: 'RSN4003', desc: '7.5W External Speaker', note: 'For high-noise environments' },
              { pn: 'RSN4004', desc: '5W External Speaker', note: '' },
            ]
          },
          {
            title: 'Control Station Accessories',
            items: [
              { pn: 'GLN7318', desc: 'Desktop Tray without Speaker', note: '' },
              { pn: 'RSN4005', desc: 'Desktop Tray with Speaker', note: '' },
              { pn: 'HKN9088', desc: 'Mobile Mini-U Antenna Adapter, 8-foot Cable', note: '' },
              { pn: 'HKN9557', desc: 'PL259/Mini-U Antenna Adapter, 8-foot Cable', note: '' },
              { pn: 'HPN4007', desc: 'Power Supply, 25-60W', note: '' },
              { pn: 'GPN6145', desc: 'Switchmode Power Supply, 1-25W', note: '' },
              { pn: 'GKN6266', desc: 'DC Power Supply Cable for GPN6145', note: '' },
            ]
          },
        ]
      },
      ptt: {
        label: 'PTT & Emergency',
        icon: '',
        sections: [
          {
            title: 'External PTT Accessories',
            items: [
              { pn: 'RLN5929', desc: 'Emergency Footswitch', note: '' },
              { pn: 'RLN5926', desc: 'Pushbutton with Push-to-Talk', note: '' },
            ]
          },
        ]
      },
      mounting: {
        label: 'Mounting & Installation',
        icon: '',
        sections: [
          {
            title: 'Mounting Kits',
            items: [
              { pn: 'RLN6466', desc: 'Low-Profile Trunnion Kit', note: 'Standard dash mount' },
              { pn: 'RLN6467', desc: 'High-Profile Trunnion Kit', note: 'Under-dash mounting with extra tilt clearance' },
              { pn: 'RLN6468', desc: 'Key Lock Trunnion Kit', note: 'Locks radio in vehicle for extra security' },
              { pn: 'RLN6465', desc: 'In-Dash Mounting Kit (DIN)', note: 'Direct in-dash mounting' },
              { pn: 'PMLN6404', desc: 'Remote Mount Kit', note: 'Transceiver can be mounted separately from control head' },
              { pn: 'PMKN4143', desc: 'Remote Mount Cable, 3 meters', note: '' },
              { pn: 'PMKN4144', desc: 'Remote Mount Cable, 5 meters', note: '' },
            ]
          },
          {
            title: 'Power Cables',
            items: [
              { pn: 'HKN4137', desc: 'Power Cable to Battery, 10-foot, 15A, 14 AWG', note: 'For 1-25W radios' },
              { pn: 'HKN4192', desc: 'Power Cable to Battery, 20-foot, 20A, 10 AWG', note: 'For 1-60W radios' },
              { pn: 'HKN4191', desc: 'Power Cable to Battery, 10-foot, 20A, 12 AWG', note: 'For 1-60W radios' },
              { pn: 'RKN4136', desc: 'Ignition Sense Cable', note: '' },
            ]
          },
        ]
      },
      antennas: {
        label: 'Antennas',
        icon: '',
        sections: [
          {
            title: 'Wide Area — Through-Hole Mount',
            items: [
              { pn: 'HAE6022', desc: 'UHF 403-527 MHz, 2dB Gain, Mini-U', note: '' },
              { pn: 'HAE4010', desc: 'UHF 406-420 MHz, 3.5dB Gain, Mini-U', note: '' },
              { pn: 'HAE4011', desc: 'UHF 450-470 MHz, 3.5dB Gain, Mini-U', note: '' },
              { pn: 'HAE4012', desc: 'UHF 470-494 MHz, 3.5dB Gain, Mini-U', note: '' },
              { pn: 'HAE4013', desc: 'UHF 494-512 MHz, 3.5dB Gain, Mini-U', note: '' },
              { pn: 'HAD4022', desc: 'VHF 132-174 MHz, 3dB Gain, Mini-U', note: '' },
            ]
          },
          {
            title: 'Urban — Through-Hole Mount',
            items: [
              { pn: 'HAE4002', desc: 'UHF 403-430 MHz, 1/4 Wave, Mini-U', note: '' },
              { pn: 'HAE4003', desc: 'UHF 450-470 MHz, 1/4 Wave, Mini-U', note: '' },
              { pn: 'HAE4004', desc: 'UHF 470-527 MHz, 1/4 Wave, Mini-U', note: '' },
              { pn: 'HAD4006', desc: 'VHF 136-144 MHz, 1/4 Wave, Mini-U', note: '' },
              { pn: 'HAD4007', desc: 'VHF 146-150.8 MHz, 1/4 Wave, Mini-U', note: '' },
              { pn: 'HAD4008', desc: 'VHF 150.8-162 MHz, 1/4 Wave, Mini-U', note: '' },
              { pn: 'HAD4009', desc: 'VHF 162-174 MHz, 1/4 Wave, Mini-U', note: '' },
            ]
          },
          {
            title: 'Combination GPS + RF Antennas',
            items: [
              { pn: 'PMAE4030', desc: 'GPS/UHF 403-430 MHz, 1/4 Wave, Mini-U', note: '' },
              { pn: 'PMAE4031', desc: 'GPS/UHF 450-470 MHz, 1/4 Wave, Mini-U', note: '' },
              { pn: 'PMAE4032', desc: 'GPS/UHF 406-420 MHz, 3.5dB Gain, Mini-U', note: '' },
              { pn: 'PMAE4033', desc: 'GPS/UHF 450-470 MHz, 3.5dB Gain, Mini-U', note: '' },
              { pn: 'PMAE4034', desc: 'GPS/UHF 450-470 MHz, 5dB Gain, Mini-U', note: '' },
              { pn: 'HAE6019', desc: 'GPS/UHF 403-527 MHz, 2dB Gain, Mini-U', note: '' },
              { pn: 'RAD4214', desc: 'GPS/VHF 136-144 MHz, 1/4 Wave, Mini-U', note: '' },
              { pn: 'RAD4215', desc: 'GPS/VHF 146-150.8 MHz, 1/4 Wave, Mini-U', note: '' },
              { pn: 'RAD4216', desc: 'GPS/VHF 150.8-162 MHz, 1/4 Wave, Mini-U', note: '' },
              { pn: 'RAD4217', desc: 'GPS/VHF 162-174 MHz, 1/4 Wave, Mini-U', note: '' },
              { pn: 'RAD4218', desc: 'GPS/VHF 146-172 MHz, 3dB Gain, Mini-U', note: '' },
            ]
          },
          {
            title: 'GPS-Only Active Antennas',
            items: [
              { pn: 'PMAN4000', desc: 'Fixed Mount GPS Active Antenna', note: '' },
              { pn: 'PMAN4001', desc: 'Glass Mount GPS Active Antenna', note: '' },
              { pn: 'PMAN4002', desc: 'Magnetic Mount GPS Active Antenna', note: '' },
            ]
          },
        ]
      },
      cables: {
        label: 'Cables & Programming',
        icon: '',
        sections: [
          {
            title: 'Programming Cables',
            items: [
              { pn: 'PMKN4010', desc: 'Mobile and Repeater Rear Programming Cable', note: '' },
              { pn: 'PMKN4016', desc: 'Mobile and Repeater Rear Accessory Programming and Test Cable', note: '' },
              { pn: 'PMKN4018', desc: 'Mobile and Repeater Rear Accessory Connector Universal Cable', note: '' },
              { pn: 'HKN6184', desc: 'Mobile Front Programming Cable', note: '' },
              { pn: 'PMLN5072', desc: 'Hardware Kit for Rear Accessory Connector', note: '' },
            ]
          },
        ]
      },
    }
  },

  // ── XPR 2500 MOBILE ───────────────────────────────────────────────────────
  'xpr2500': {
    name: 'XPR 2500',
    sub: 'DMR Entry-Level Mobile',
    tags: ['DMR Tier II', 'Analog Compatible', 'IMPRES'],
    tagStyles: ['', '', 'orange'],
    categories: {
      microphones: {
        label: 'Mobile Microphones',
        icon: '',
        sections: [
          {
            title: 'Microphones',
            items: [
              { pn: 'RMN5052', desc: 'Standard Compact Microphone', note: 'Intelligent Audio' },
              { pn: 'RMN5053', desc: 'IMPRES Heavy-Duty Microphone', note: 'Intelligent Audio' },
              { pn: 'RMN5050', desc: 'Desktop Microphone', note: 'Intelligent Audio' },
            ]
          },
          {
            title: 'Microphone Accessories',
            items: [
              { pn: 'HLN9414', desc: 'Universal Microphone Hang-Up Clip', note: '' },
              { pn: 'HLN9073', desc: 'Microphone Hang-Up Clip', note: '' },
            ]
          },
        ]
      },
      external_speakers: {
        label: 'Speakers & Control Station',
        icon: '',
        sections: [
          {
            title: 'External Speakers',
            items: [
              { pn: 'RSN4002', desc: '13W External Speaker', note: 'For extreme-noise environments' },
              { pn: 'RSN4003', desc: '7.5W External Speaker', note: '' },
              { pn: 'RSN4004', desc: '5W External Speaker', note: '' },
            ]
          },
          {
            title: 'Control Station Accessories',
            items: [
              { pn: 'GLN7318', desc: 'Desktop Tray without Speaker', note: '' },
              { pn: 'RSN4005', desc: 'Desktop Tray with Speaker', note: '' },
              { pn: 'HPN4007', desc: 'Power Supply, 25-60W', note: '' },
              { pn: 'GPN6145', desc: 'Switchmode Power Supply, 1-25W', note: '' },
            ]
          },
        ]
      },
      ptt: {
        label: 'PTT & Emergency',
        icon: '',
        sections: [
          {
            title: 'External PTT',
            items: [
              { pn: 'RLN5929', desc: 'Emergency Footswitch', note: '' },
              { pn: 'RLN5926', desc: 'Pushbutton with Push-to-Talk', note: '' },
            ]
          },
        ]
      },
      mounting: {
        label: 'Mounting & Installation',
        icon: '',
        sections: [
          {
            title: 'Mounting Kits',
            items: [
              { pn: 'RLN6466', desc: 'Low-Profile Trunnion Kit', note: '' },
              { pn: 'RLN6467', desc: 'High-Profile Trunnion Kit', note: '' },
              { pn: 'RLN6465', desc: 'In-Dash Mounting Kit (DIN)', note: '' },
            ]
          },
          {
            title: 'Power Cables',
            items: [
              { pn: 'HKN4137', desc: 'Power Cable to Battery, 10-foot, 15A, 14 AWG', note: 'For 1-25W radios' },
              { pn: 'HKN4191', desc: 'Power Cable to Battery, 10-foot, 20A, 12 AWG', note: 'For 1-60W radios' },
              { pn: 'RKN4136', desc: 'Ignition Sense Cable', note: '' },
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
              { pn: 'HAE4002', desc: 'UHF 403-430 MHz, 1/4 Wave, Mini-U', note: '' },
              { pn: 'HAE4003', desc: 'UHF 450-470 MHz, 1/4 Wave, Mini-U', note: '' },
              { pn: 'HAE6022', desc: 'UHF 403-527 MHz, 2dB Gain, Mini-U', note: '' },
            ]
          },
          {
            title: 'VHF Antennas',
            items: [
              { pn: 'HAD4007', desc: 'VHF 146-150.8 MHz, 1/4 Wave, Mini-U', note: '' },
              { pn: 'HAD4008', desc: 'VHF 150.8-162 MHz, 1/4 Wave, Mini-U', note: '' },
              { pn: 'HAD4009', desc: 'VHF 162-174 MHz, 1/4 Wave, Mini-U', note: '' },
            ]
          },
        ]
      },
      cables: {
        label: 'Cables & Programming',
        icon: '',
        sections: [
          {
            title: 'Programming Cables',
            items: [
              { pn: 'PMKN4010', desc: 'Mobile and Repeater Rear Programming Cable', note: '' },
              { pn: 'PMKN4016', desc: 'Mobile and Repeater Rear Accessory Programming and Test Cable', note: '' },
              { pn: 'HKN6184', desc: 'Mobile Front Programming Cable', note: '' },
            ]
          },
        ]
      },
    }
  }

};

const RADIOS = RADIOS_DATA;