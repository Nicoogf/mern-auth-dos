import Card from "../models/card.model.js";

export const getCards = async (req, res) => {
    const cards = await Card.find({
        user: req.user.id
    }).populate("user")
    res.json(cards)
}

export const createCards = async (req, res) => {
    const { empresa, tipo, fondos } = req.body

    const newCard = new Card({
        empresa,
        tipo,
        fondos,
        user: req.user.id
    })

    const cardSaved = await newCard.save()
    res.json(cardSaved)
}

export const getCard = async (req, res) => {
    const card = await Card.findById(req.params.id).populate("user")
    if (!card) res.status(404).json({ message: "No se encontro tarjeta" })
    res.json(card)
}

export const deleteCards = async (req, res) => {
    const card = await Card.findByIdAndDelete(req.params.id)
    if (!card) res.status(404).json({ message: "No se encontro tarjeta" })
    res.status(200).json({message: "Tarjeta eliminada"})
}

export const updateCards = async (req, res) => {
    const card = await Card.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!card) return res.statud(404).json({ message: "No se encontro tarjeta" })
    res.json(card)
}

