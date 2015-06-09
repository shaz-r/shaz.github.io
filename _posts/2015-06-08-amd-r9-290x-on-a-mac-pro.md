---
layout: post
title: AMD Radeon R9 290X on a Mac Pro 3,1 (Early 2008)
tags: tech
---

There's an incredible amount of resources (forums, blogs, articles and whatnot) out there for these early Mac Pro's, so I figured I'd share my experiences in building a gaming rig out of a 6 year old Mac.

I started off with the Mac Pro (3,1 - Early 2008); it came with 4gb of RAM (4 x 1gb), a 320GB hard drive, 2x Quad Core Xeons (2.8GHz) and a good ol' Radeon X1600XT.

First things first - I got myself onto eBay and ordered me the following:

- 8gb of Ram (4 x 2gb - made sure to get the ones with the heatsink on them)<sup>[1](http://www.ebay.com.au/usr/efetchercom?_trksid=p2060353.m2749.l2754)</sup>
- Airport Extreme (BCM94360CD to be exact - has 802.11ac, Bluetooth 4.0 etc)<sup>[2](http://www.ebay.com.au/usr/integrity-e?_trksid=p2060353.m2749.l2754)</sup>
- 480GB OZC ARC100 SSD
- Gigabyte Radeon R9 290XOC

The first three were a pretty / straightfoward fit. The graphics card, on the otherhand, is a bif of a power hog - so some wiring was required.

The 6-pin mini pci-e auxillary power ports on the motherboard are intended to provide up to 75W each - some resources state they can give up to 150W / throttle down connections by providing 75W but I'd rather not take that chance. The PCI-Express slots themselves provide 75W each. So I'm at 225W when I use both aux power ports and the power from the slot itself, somewhat shy of 300W needed by the graphics card. Since I'm only using one optical drive, and have a spare Hard Disk spot - I got some wires to have them all going into the graphics card.

To start with, I got myself a _Mac Pro 6-pin (mini pci-e) to 6-pin PCI-e Cable_<sup>[3](http://www.ebay.com.au/usr/pc_store09?_trksid=p2060353.m2749.l2754)</sup>. This one went straight from my motherboard into my graphics card, no dramas. 

Next up was purchasing a _Molex extension cable_ (30cm worked well) - I plugged it into the 2nd optical drive power and routed it through the underside along all the other wires. If you have an Airport Extreme card - be careful as those antenna wires will easily pop out! It is a really tight squeeze but it does go through that gap.

I should mention that for the 8-pin pci-e input in to the graphics card I am using the provided cable (8-pin to 2x Molex Male), and in went the power from optical drive to one of the molex's. I also got a _SATA to Molex_ cable (M2F) and a _Molex Splitter (1 into 2)_, alongside a _Mac Pro 6-pin (mini pci-e) to Molex_<sup>[4](http://www.ebay.com.au/usr/crazyconn?_trksid=p2060353.m2749.l2754)</sup> cable. The Mac Pro cable was rather odd as it provided a Male molex port (power providers should be female), regardless I also had a female port from the _SATA to Molex_ cable (as it was intended to provide power for SATA), so one split end went into the graphics card, the other into the motherboard and the Male end ending up hooking up with the Female _Sata to Molex_.

For those curious - it works like a dream. No drivers were needed for it to run OSX - as you would've have read you do loose the bootscreen. I may flash it at some point, but I'm happy right now using Bootcamp on Windows to boot back into OSX and Bootchamp on OSX to boot into Windows.

I also had to purchase a DisplayPort cable - I'm currently running this setup on an ultra-wide LG display; and OSX was being rather difficult with outputting anything beyond 1080p via HDMI.

Next up - I'll write about installing Windows 8.1 and Bootcamp 5 - which technically isn't supported, but works fine.
