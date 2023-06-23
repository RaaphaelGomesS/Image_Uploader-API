import Photo from "../model/photo.js";

class PhotoController {
  async create(req, res) {
    try {
      const { name } = req.body;

      const file = req.file;

      const photo = new Photo({
        name,
        src: file.path,
      });

      await photo.save();

      res.json({
        name: photo.name,
        src: photo.src,
        message: "enviado com sucesso!",
      });
    } catch (error) {
      res.status(400).json({ message: "a imagem não foi enviada" });
    }
  }

  async findAll(req, res) {
    try {
      const photos = await Photo.find();
      res.status(200).json(photos);
    } catch (error) {
      res.status(400).json({ message: "Não foram encontrado imagens" });
    }
  }
}

export default new PhotoController();
