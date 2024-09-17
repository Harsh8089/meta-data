import metaData from "../model/metadata.model.js";

const handleMetaData = async(req, res) => {
    try {
        const { name, symbol, description, image } = req.body;

        if(!name || !symbol || !description || !image) {
            res.status(404).json({
                success: false,
                message: "All fields are required"
            })
        }

        const metadata = new metaData(
            {
                name,
                symbol,
                description,
                image
            }
        )

        await metadata.save();
    
        res.status(200).json({
           success: true,
           data: metadata
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "An error occurred while processing your request",
            error
        });
    }
}

const getMetaData = async(req, res) => {
    try {
        const { id } = req.query;
        if(!id) {
            res.status(404).json({
                success: false,
                error: "id is missing to create a new token"
            })
        }

        const metadata = await metaData.findById(id);

        if(!metaData) {
            res.status(404).json({
                success: false,
                error: "id is missing in db to create a new token"
            })
        }

        await metaData.findByIdAndDelete(id);

        res.json({
            name: metadata.name,
            symbol: metadata.symbol,
            description: metadata.description,
            image: metadata.image
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "An error occurred while processing your request",
            error
        });
    }
}

export {
    handleMetaData,
    getMetaData
}
