import { MenuItem } from "../types/types";
import { optimizeCloudinaryUrl } from "../lib/optimizeCloudinaryUrl";

// --- MUTTON DELIGHTS ---
export const muttonDelights: MenuItem[] = [
  { id: 119, 
    name: "MUTTON CURRY", description: "Pieces of lamb well cooked in tomato & onion curry", price: 8.00, category: "Mutton Delights", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771613983/MUTTON_CURRY_nlsjmt.webp"), vegetarian: false },
  { id: 120, 
    name: "MUTTON MASALA", description: "Tender lamb pcs simmered in spicy gravy of tomatoes & onions", price: 8.50, category: "Mutton Delights", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771613978/MUTTON_MASALA_zlbec5.webp"), vegetarian: false, spicy: true },
  { id: 121, 
    name: "MUTTON DO PYAZA", description: "Traditional mughlai dish; mutton cooked with fried onions & spices", price: 8.50, category: "Mutton Delights", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771613984/MUTTON_DO_PYAZA_hzdmbw.webp"), vegetarian: false },
  { id: 122, 
    name: "MUTTON VINDALOO", description: "Boneless mutton & chopped potatoes cooked in hot & spicy gravy", price: 8.50, category: "Mutton Delights", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771613980/MUTTON_VINDALOO_ofhevx.webp"), vegetarian: false, spicy: true },
  { id: 123, 
    name: "MUTTON KEEMA", description: "Minced mutton well prepared in tomato garlic and onion sauce and spiced", price: 8.50, category: "Mutton Delights", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771613988/MUTTON_KEEMA_qq7byj.webp"), vegetarian: false },
  { id: 124, 
    name: "MUTTON HARIYALI / MUTTON SAAG", description: "Boneless mutton pcs cooked together with spinach in thick masala gravy", price: 8.75, category: "Mutton Delights", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771613985/MUTTON_HARIYALI_MUTTON_SAAG_oqfqro.webp"), vegetarian: false },
  { id: 125, 
    name: "MUTTON MUSHROOM MASALA", description: "Boneless mutton richly prepared with button mushroom and masala gravy", price: 8.75, category: "Mutton Delights", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771613979/MUTTON_MUSHROOM_MASALA_ewxgrs.webp"), vegetarian: false },
  { id: 126, 
    name: "MUTTON DHANIYA", description: "Minced mutton well prepared in tomato garlic and onion sauce and spiced", price: 8.75, category: "Mutton Delights", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771613984/MUTTON_DHANIYA_jmfaqm.webp"), vegetarian: false },
  { id: 127, 
    name: "MUTTON ROGAN JOSH", description: "A classical lamb dish in rich onion & tomato sauce and served with saffron rice", price: 9.00, category: "Mutton Delights", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771613980/MUTTON_ROGAN_JOSH_n7bvhu.webp"), vegetarian: false, popular: true },
  { id: 128, 
    name: "KEEMA MATAR", description: "Minted mutton and green peas well cooked in thick gravy", price: 9.00, category: "Mutton Delights", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771613982/KEEMA_MATAR_mkmqjq.webp"), vegetarian: false },
  { id: 129, 
    name: "MUTTON KORMA", description: "Boneless mutton pcs cooked in thick cashew nut & milk gravy", price: 8.75, category: "Mutton Delights", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771613988/MUTTON_KORMA_he1hfq.webp"), vegetarian: false },
  { id: 130, 
    name: "MUTTON MADRAS 'GOAD'", description: "Delicious mutton dish simmered with five spice, Indian spice, onion, tomato, Kashmiri dry red chili and garnished with coriander leaf", price: 9.00, category: "Mutton Delights", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771613973/MUTTON_MADRAS_GOAD_coqmce.webp"), vegetarian: false, spicy: true },
  { id: 131, 
    name: "AKBARI KOFTA", description: "A 300-year old recipe of mughul cuisine; minced lamb cooked in rich gravy of cashew, herbs & spices. Served with garlic naan", price: 9.50, category: "Mutton Delights", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771613989/AKBARI_KOFTA_uj9zqr.webp"), vegetarian: false }
];