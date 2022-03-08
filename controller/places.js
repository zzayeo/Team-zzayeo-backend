const PlacesService = require('../services/places');

//여행 일정 추가
const postplaces = async (req, res, next) => {
    try {
        const { dayId } = req.params;
        const { placeName, lat, lng, address, time, memoText } = req.body;

        // let videoUrl = [];
        let imageUrl = [];

        // req.files.videoFile ? videoUrl = req.files.videoFile : videoUrl;
        req.files.imageFile ? (imageUrl = req.files.imageFile) : imageUrl;

        const Places = await PlacesService.createplaces({
            dayId,
            placeName,
            lat,
            lng,
            address,
            time,
            memoText,
        });

        return res.json({ result: 'success', message: '작성 완료' });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    postplaces,
};
